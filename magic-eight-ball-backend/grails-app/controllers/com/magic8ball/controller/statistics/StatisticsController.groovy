package com.magic8ball.controller.statistics

import com.magic8ball.model.statistics.Statistics
import grails.converters.JSON

/**
 * Created by parisfreire on 19/03/2019.
 */
class StatisticsController {
    static responseFormats = ['json', 'xml']


    /**
     * Retrieving statistics
     * @return Statistics
     */
    def get(){
        /* Retrieving an instance of Statistics class in JSON*/
        render  Statistics.instance as JSON
    }
}
