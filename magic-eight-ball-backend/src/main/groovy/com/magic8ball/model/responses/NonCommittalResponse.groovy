package com.magic8ball.model.responses

/**
 * Created by parisfreire on 18/03/2019.
 */
class NonCommittalResponse extends BallResponse{

    String type = BallResponsesEnum.NONCOMMITTAL

    NonCommittalResponse(String response) {
        this.response = response
    }
}
