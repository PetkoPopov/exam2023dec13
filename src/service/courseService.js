const mongoose = require('mongoose')
const Course = require('../models/courseModel.js')

exports.save = async({ title, type, certificate, description, image, price }) => {

    // console.log(title, type, certificate, description, image, price,'from services !');
   const course =  await Course.create({ title, type, certificate, description, image, price })
    return !!course
}
exports.getAll= async()=>{
const  allCourses = await Course.find().lean()
return allCourses

}