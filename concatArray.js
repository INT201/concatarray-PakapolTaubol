const { template } = require('@babel/core')

function concatArray(array1, array2) {
  //code here
  if ((array1 === null || array1 === undefined ) && ( array2 === null || array2 === undefined )) // ทั้งคู่มีค่า null หรือ undefined
  { return undefined }
  if ((array1?.length === 0) && (array2?.length === 0)) // ทั้งคู่เป็น emtry array --> []
  { return array1 }
  if ((array1 === null || array1 === undefined || array1.length ===0) ) // array1 เป็น emtry array or null or undefined return แค่ array2
  { return array2 }
  if ((array2 === null || array2 === undefined || array2.length === 0)) // array2 เป็น emtry array or null or undefined return แค่ array1
  { return array1 }
  // function return
  return array1.concat(array2) // เรียงลำดับจาก element ใน array1 และตามด้วย element ใน array2
}
module.exports = concatArray
