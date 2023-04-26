const User = require("../models/userModel");


// Get User Detail
exports.getUserDetails = async(req,res)=>{
    const user = await User.find();
    
    res.status(200).json({
        success: true,
        data: user
    })
}

// 1. Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.

exports.lowerIncomeBmwMercedes = async(req,res)=>{
    const user = await User.find({
        $and: [
          { $or: [ { car: "BMW" }, { car: "Mercedes" } ] },
          { $expr: { $lt: [ { $toDouble: { $substr: [ "$income", 1, -1 ] } }, 5 ] } }
        ]
      })
    
    res.status(200).json({
        success: true,
        data: user
    })
}

// 2. Male Users which have phone price greater than 10,000.

exports.phonePriceGreater = async(req,res)=>{
    const user = await User.find({
        $expr: {
          $gt: [ { $toDouble: "$phone_price" }, 10000 ]
        }
      })
    
    res.status(200).json({
        success: true,
        data: user
    })
}

// 3. Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.

exports.lastNameIncludesM = async(req,res)=>{
    const user = await User.find({
        $and: [
          { last_name: { $regex: "^M" } }, 
          { $expr: { $gt: [ { $strLenCP: "$quote" }, 15 ] } }, 
          { $expr: { $regexMatch: { input: "$email", regex: { $concat: [".*", "$last_name", ".*"] }, options: "i" } } }
        ]
    })
    
    res.status(200).json({
        success: true,
        data: user
    })
}

// 4. Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.

exports.notIncludeDigits = async(req,res)=>{
    const user = await User.find({
        $and: [
          { car: { $in: ["BMW", "Mercedes", "Audi"] } },
          { email: { $not: /\d/ } }
        ]
      })
    
    res.status(200).json({
        success: true,
        data: user
    })
}

// 5. Show the data of top 10 cities which have the highest number of users and their average income.

exports.topTenCities = async(req,res)=>{
    const cities = await User.aggregate([
        { $group: { _id: "$city", count: { $sum: 1 }, total_income: { $sum: { $toDouble: { $substrCP: [ "$income", 1, 4 ] } } }, users: { $push: "$$ROOT" } } },
        { $sort: { count: -1 } },
        { $limit: 10 },
        { $project: { _id: 0, city: "$_id", average_income: { $toString: { $round: [ { $divide: [ "$total_income", "$count" ] }, 2 ] } }, users: "$users" } }
      ])
    
    res.status(200).json({
        success: true,
        data: cities
    })
}
