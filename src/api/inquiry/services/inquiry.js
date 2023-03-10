'use strict';

/**
 * inquiry service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::inquiry.inquiry');
