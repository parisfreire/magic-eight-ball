package com.magic8ball.service.statistics

import com.magic8ball.model.responses.BallResponse
import com.magic8ball.model.responses.Question
import com.magic8ball.model.statistics.Statistics
import javassist.NotFoundException

/**
 * Created by parisfreire on 19/03/2019.
 */
class StatisticsService {

    /**
     * Call private methods of this service to process the statistics
     * @param BallResponse, Question
     * @return
     */

    void processStatistics(BallResponse ballResponse, Question question){
        this.processBallResponse(ballResponse)
        this.processQuestion(question)
    }

    /**
     * Process question submitted by the user
     * @param Question
     * @return
     */
    private void processQuestion(Question question){
        if(question == null){
            throw new NotFoundException("Question not found.")
        }else{
            Statistics.instance.processQuestion(question)
        }
    }

    /**
     * Process ball response to fill in the statistics
     * @param BallResponse
     * @return
     */
    private void processBallResponse(BallResponse ballResponse){
        if (ballResponse == null){
            throw new NotFoundException("Ball response not found")
        }else{
            Statistics.instance.processBallResponse(ballResponse)
        }
    }


}
