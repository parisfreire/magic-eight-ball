package com.magic8ball.service.game

import com.magic8ball.model.responses.BallResponse
import com.magic8ball.model.responses.Game
import javassist.NotFoundException

/**
 * Created by parisfreire on 19/03/2019.
 */
class GameService {

    /**
     * Retrieve random response from Game singleton
     * @param
     * @return BallResponse
     */

    BallResponse getRandomResponse(){
        BallResponse ballResponse = Game.instance.getRandomResponse()
        if (ballResponse == null){
            throw new NotFoundException("Ball response not found")
        }
        return ballResponse
    }
}
