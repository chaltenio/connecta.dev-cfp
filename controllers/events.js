const path = require('path');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const geocoder = require('../utils/geocoder');
const Event = require('../models/Event');


// @desc    Get all events
// @route   GET /api/v1/events
// @access  Public

exports.getEvents = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedResults);
  });
  
  // @desc    Get a single event
  // @route   GET /api/v1/events/:id
  // @access  Public
  exports.getEvent = asyncHandler(async (req, res, next) => {
    const event = await Event.findById(req.params.id);
  
    if (!event) {
      return next(
        new ErrorResponse(`Event not found with ID of ${req.params.id}`, 404)
      );
    }
  
    res.status(200).json({ success: true, data: event });
  });