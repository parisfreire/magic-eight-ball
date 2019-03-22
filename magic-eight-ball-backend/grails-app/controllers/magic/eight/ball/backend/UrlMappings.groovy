package magic.eight.ball.backend

class UrlMappings {

    static String API_VERSION = "v1"

    static mappings = {

        /*
        delete "/$controller/$id(.$format)?"(action:"delete")
        get "/$controller(.$format)?"(action:"index")
        get "/$controller/$id(.$format)?"(action:"show")
        post "/$controller(.$format)?"(action:"save")
        put "/$controller/$id(.$format)?"(action:"update")
        patch "/$controller/$id(.$format)?"(action:"patch")
        */

        group "/api/$API_VERSION",{
            group "/game",{
                // Submit question
                post "/"(controller: 'game', action: 'submit')

            }

            group "/statistics",{
                // Get statistics
                get "/"(controller: 'statistics', action: 'get')
            }
        }

        "/"(controller: 'application', action:'index')
        "500"(view: '/error')
        "404"(view: '/notFound')
    }
}
