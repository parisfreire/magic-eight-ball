package com.magic8ball.model.statistics

import com.magic8ball.model.responses.BallResponse
import com.magic8ball.model.responses.BallResponsesEnum
import com.magic8ball.model.responses.Question

/**
 * Created by parisfreire on 18/03/2019.
 */

@Singleton
class Statistics {

    /* Questions */
    int totalQuestions
    /* Answers */
    int totalAffirmativeResponses
    int totalNonCommittalResponses
    int totalNegativeResponses

    void processQuestion(Question question){
        totalQuestions++
        /* Use this method to extend logic to process the questions received */
    }

    void processBallResponse(BallResponse ballResponse){
        processResponseType(ballResponse.type);
        /* Use this method to implement logic to process all the object, not only type field*/
    }

    private void processResponseType(String type){
        switch (type){
            case BallResponsesEnum.AFFIRMATIVE.toString():
                totalAffirmativeResponses++
                break
            case BallResponsesEnum.NONCOMMITTAL.toString():
                totalNonCommittalResponses++
                break
            case BallResponsesEnum.NEGATIVE.toString():
                totalNegativeResponses++
                break
        }
    }
}
