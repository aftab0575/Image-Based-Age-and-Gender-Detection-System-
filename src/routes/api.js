const express =require('express');

const FaceMatchController=require("../controllers/FaceMatchController");
const FaceExpressionController=require("../controllers/FaceExpressionController");
const FaceAgeGenderController=require("../controllers/FaceAgeGenderController");
const FaceLandmarkController=require("../controllers/FaceLandmarkController");
const FacialDistanceController=require("../controllers/FacialDistanceController");
const FaceCountController=require("../controllers/FaceCountController");
const FaceCountWithAgeGenderController=require("../controllers/FaceCountWithAgeGenderController");

const router =express.Router();

router.post("/FaceMatch",FaceMatchController.FaceMatch);
router.post("/FaceExpression",FaceExpressionController.FaceExpression);
router.post("/FaceAgeGender",FaceAgeGenderController.FaceAgeGender);
router.post("/FaceLandmark",FaceLandmarkController.FaceLandmark);
router.post("/FacialDistance",FacialDistanceController.FacialDistance);
router.post("/FaceCount",FaceCountController.FaceCount);
router.post("/FaceCountWithAgeGender",FaceCountWithAgeGenderController.FaceCountWithAgeGender);

module.exports=router;