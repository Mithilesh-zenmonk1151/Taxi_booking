const { BookingInfo } = require("../models");
const bookinginfo = require("../models/bookinginfo");
const { car } = require("../models");
const CustomError = require("../utils/error");
exports.createBooking = async (payload) => {
  try {
    const {
      userId,
      carId,
      fullName,
      pickUpCity,
      dropCity,
      startDate,
      endDate,
      duration,
      email,
      phone,
      bankHolder,
      cardNumber,
      paymentStatus,
      invoiceNumber,
    } = payload.body;
    console.log("qwre34t======", payload.body);
    const carInfo = await car.findOne({ where: { uuid: carId } });
    const carPerDayPrice = await carInfo.price;
    console.log("Car Info===============", carPerDayPrice);
    const cityInfo = await carInfo.allwedCity;
    const lenghCity =await cityInfo.length;
    let count = 0;
    // if(startDate===endDate){
    //     throw new CustomError("start and end date should not be same",409)
    // }
    console.log("Pickup==============",pickUpCity);
    for (let i = 0; i < lenghCity; i++) {
      if (cityInfo[i]===pickUpCity) {
        console.log("CityInfo====================",cityInfo[i]);

        count++;
      }
      console.log("qudgwef============",cityInfo[i]);
    }
    for (let i = 0; i < lenghCity; i++) {
      if (cityInfo[i] === dropCity) {
        // throw new CustomError("Car is not available for speccified city",403);
        count++;
      }
    }
    function stringToCharArrayWithDelimiter(str, delimiter) {
      return str.split(delimiter);
    }

    const  startDA = startDate;
    const endDAT = endDate;
    const delimiter = /[/]/;
    const startResult = stringToCharArrayWithDelimiter(startDA, delimiter);
    const endResult = stringToCharArrayWithDelimiter(endDAT, delimiter);
    // console.log(startResult);
    // console.log(endResult);
    const day = endResult[0] - startResult[0];
    const month = (endResult[1] - startResult[1]) * 30;
    const response = parseInt(month) + parseInt(day);
    console.log("day==================", response);
    console.log("uus===============", response);

    const totalPriceTobePaid = (await carPerDayPrice) * response;
    console.log("TTTOOTAL============",totalPriceTobePaid);
    console.log("TTTYYYYPPE==",typeof(totalPriceTobePaid));

    let bookingInfo;

    try {
      if (count === 2) {
        console.log("Count=====",count);
        bookingInfo = await BookingInfo.create({
          userId: userId,
          carId: carId,
          pickUpCity: pickUpCity,
          dropCity: dropCity,
          phone: phone,
          bankHolder: bankHolder,
          startDate: startDate,
          endDate: endDate,
          duration: duration,
          price:totalPriceTobePaid,
          cardNumber:cardNumber,
          paymentStatus: paymentStatus,
          invoiceNumber: invoiceNumber,
        });
      }
      console.log("Booking=======================", bookingInfo);
      return bookingInfo;
    } catch (error) {
      console.log("ERRRRRRRRRRRRRR============");
    }
  } catch (error) {
    throw error;
  }
};
exports.updateBooking=async(payload)=>{
  try{
    const {bookingId}= payload.params;
    const {endDate,duration,paymentStatus}= payload.body;
    if(!bookingId){
      throw new CustomError("book isnot found",404);
    }
      const updatedBooking=  await BookingInfo.update({
        endDate:endDate,
        duration:duration,
        paymentStatus:paymentStatus


      },{new:true},{where:{uuid:bookingId}})
      return updatedBooking;

  }
  catch(error){

  }
}
