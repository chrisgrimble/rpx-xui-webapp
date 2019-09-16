import * as express from 'express'
import * as striptags from 'striptags'
import { http } from '.'
import { config } from '../config'
//import * as log4jui from './log4jui'
import { EnhancedRequest } from './models'

//const logger = log4jui.getLogger('proxy')

export function setHeaders(req: EnhancedRequest) {
    const headers: any = {}

    headers['content-type'] = req.headers['content-type']
    if (req.headers.accept) {
        headers.accept = req.headers.accept || null
    }
    if (req.headers.experimental) {
        headers.experimental = req.headers.experimental || null
    }

    return headers
}

export async function get(req: EnhancedRequest, res: express.Response) {
    let url = striptags(req.url)
    url = req.baseUrl  + url
    const headers: any = setHeaders(req)

    try {
        const response = await http.get(`${config.services.ccd.componentApi}${url}`, { headers })

        res.status(200)
        res.send(response.data)
    } catch (e) {
        console.log(e)
        res.status(e)
        res.send(e.response.data)
    }
}

export async function put(req: EnhancedRequest, res: express.Response) {
    let url = striptags(req.url)
    url = req.baseUrl + url

    const headers: any = setHeaders(req)

    try {
        const response = await http.put(`${config.services.ccd.componentApi}${url}`, req.body, { headers })
        res.status(200)
        res.send(response.data)
    } catch (e) {
        res.status(e.response.status)
        res.send(e.response.data)
    }
}

export async function post(req: EnhancedRequest, res: express.Response) {
    let url = striptags(req.url)
    url = req.baseUrl + url

    const headers: any = setHeaders(req)

    try {
        const response = await http.post(`${config.services.ccd.componentApi}${url}`, req.body, { headers })
        res.status(200)
        res.send(response.data)
    } catch (e) {
        /**
         * Adnan: 12/09/2019
         *
         * Ticket EUI-734 required me to remove '.reponse' from both lines below.
         *      res.status(e.response.status) => res.status(e.status)
         *      res.send(e.response.data) => res.send(e.data)
         * The response from CCD does not have the 'response' property.
         */
        res.status(e.status)
        res.send(e.data)
    }
}
