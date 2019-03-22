package com.magic8ball.model.responses

/**
 * Created by parisfreire on 20/03/2019.
 */
@Singleton
class Game {

    /* Initialization list of responses */
    private List<BallResponse> ballResponseList = [
            /* Adding affirmative responses */
            new AffirmativeResponse("It is certain."),
            new AffirmativeResponse("It is decidedly so."),
            new AffirmativeResponse("Without a doubt."),
            new AffirmativeResponse("Yes - definitely."),
            new AffirmativeResponse("You may rely on it."),
            new AffirmativeResponse("As I see it, yes."),
            new AffirmativeResponse("Most likely."),
            new AffirmativeResponse("Outlook good."),
            new AffirmativeResponse("Yes."),
            new AffirmativeResponse("Signs point to yes."),
            /* Adding non-committal responses */
            new NonCommittalResponse("Reply hazy, try again."),
            new NonCommittalResponse("Ask again later."),
            new NonCommittalResponse("Better not tell you now."),
            new NonCommittalResponse("Cannot predict now."),
            new NonCommittalResponse("Concentrate and ask again."),
            /* Adding negative responses */
            new NegativeResponse("Don't count on it."),
            new NegativeResponse("My reply is no."),
            new NegativeResponse("My sources say no."),
            new NegativeResponse("Outlook not so good."),
            new NegativeResponse("Very doubtful.")
    ]


    /* Return a random BallResponse object from list of responses */
    BallResponse getRandomResponse(){
        /* Random number from list size*/
        int randomIndex = new Random().nextInt(ballResponseList.size())

        return ballResponseList.get(randomIndex)
    }

}
