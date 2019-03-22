package com.magic8ball.controller.game

import com.magic8ball.model.responses.BallResponse
import com.magic8ball.model.responses.Question
import com.magic8ball.service.game.GameService
import com.magic8ball.service.statistics.StatisticsService
import grails.converters.JSON

/**
 * Created by parisfreire on 19/03/2019.
 */

class GameController {
    static responseFormats = ['json', 'xml']

    GameService gameService
    StatisticsService statisticsService

    /**
     * Submit of a question
     * @return BallResponse
     */
    def submit(Question question){
        /* Retrieving a random response */
        BallResponse ballResponse = this.gameService.getRandomResponse()
        /* Processing the response and user question for Statistics*/
        this.statisticsService.processStatistics(ballResponse, question)

        // Building and sending the JSON
        render ballResponse as JSON
    }
}
