package com.magic8ball.model.responses

/**
 * Created by parisfreire on 18/03/2019.
 */
class AffirmativeResponse extends BallResponse{

    String type = BallResponsesEnum.AFFIRMATIVE

    AffirmativeResponse(String response) {
        this.response = response
    }
}
