package com.magic8ball.model.responses

/**
 * Created by parisfreire on 18/03/2019.
 */
class NegativeResponse extends BallResponse{

    String type = BallResponsesEnum.NEGATIVE

    NegativeResponse(String response) {
        this.response = response
    }
}
