const express = require('express');

const {
  getEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
  getEventsInRadius,
  eventPhotoUpload
} = require('../controllers/Events');

const Event = require('../models/Event');

// Include other resource routers
const courseRouter = require('./talks');
const reviewRouter = require('./reviews');

const router = express.Router();

const advancedResults = require('../middleware/advancedResults');
const { protect, authorize } = require('../middleware/auth');

// Re-route into other resource routers
router.use('/:eventId/talks', courseRouter);
router.use('/:eventId/reviews', reviewRouter);

router.route('/radius/:zipcode/:distance').get(getEventsInRadius);

router.route('/:id/photo').put(protect, authorize('publisher', 'admin'), eventPhotoUpload);

router
  .route('/')
  .get(advancedResults(Event, 'talks'), getEvents)
  .post(protect, authorize('publisher', 'admin'), createEvent);

router
  .route('/:id')
  .get(getEvent)
  .put(protect, authorize('publisher', 'admin'), updateEvent)
  .delete(protect, authorize('publisher', 'admin'), deleteEvent);

module.exports = router;