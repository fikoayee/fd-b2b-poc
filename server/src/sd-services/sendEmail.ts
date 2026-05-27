// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import cookieParser from 'cookie-parser'; //_splitter_
import { dirname } from 'path'; //_splitter_
import { fileURLToPath } from 'url'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { TracerService } from '../services/TracerService'; //_splitter_
import log from '../utils/Logger'; //_splitter_
//append_imports_end
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export class sendEmail {
  private sdService = new SDBaseService();
  private tracerService = new TracerService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'sendEmail';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new sendEmail(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    //append_listeners
  }

  async mountTimers() {
    //appendnew_flow_sendEmail_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: sendEmail');
    //appendnew_flow_sendEmail_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: sendEmail');

    this.app['post'](
      `${this.serviceBasePath}/sendEmail`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_17art4PVaJN4amUC(bh, parentSpanInst);
          //appendnew_next_sd_Cfgm1ubQybaKnV0i
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Cfgm1ubQybaKnV0i');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_sendEmail_HttpIn
  }
  //   service flows_sendEmail

  //appendnew_flow_sendEmail_start

  async sd_17art4PVaJN4amUC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_17art4PVaJN4amUC',
      parentSpanInst
    );
    try {
      bh.local.resendBody = {
        from: 'Motor POC <onboarding@resend.dev>',
        to: [bh.input.body.to],
        subject: bh.input.body.subject,
        html: bh.input.body.html_body,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_GgNYo2xxjz5vgtYO(bh, parentSpanInst);
      //appendnew_next_sd_17art4PVaJN4amUC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_17art4PVaJN4amUC',
        spanInst,
        'sd_17art4PVaJN4amUC'
      );
    }
  }

  async sd_GgNYo2xxjz5vgtYO(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: 'https://api.resend.com/emails',
        timeout: 30000,
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer re_He1PfHq8_MjEyRtnetLWDjGnKuFyLS3uL',
        },
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.local.resendBody,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.response = responseMsg;
      bh = await this.sd_oEuo7UG81N2wgTQv(bh, parentSpanInst);
      //appendnew_next_sd_GgNYo2xxjz5vgtYO
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_GgNYo2xxjz5vgtYO');
    }
  }

  async sd_oEuo7UG81N2wgTQv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_oEuo7UG81N2wgTQv',
      parentSpanInst
    );
    try {
      const payload = bh.local.response?.payload || {};

      if (payload.id) {
        bh.local.output = {
          success: true,
          email_id: payload.id,
          message: 'Email sent successfully',
        };
      } else {
        bh.local.output = {
          success: false,
          error: payload.message || 'Failed to send email',
          debug: bh.local.response,
        };
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_vHuAygG9eniAms8c(bh, parentSpanInst);
      //appendnew_next_sd_oEuo7UG81N2wgTQv
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oEuo7UG81N2wgTQv',
        spanInst,
        'sd_oEuo7UG81N2wgTQv'
      );
    }
  }

  async sd_vHuAygG9eniAms8c(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.output);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vHuAygG9eniAms8c');
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(
    bh,
    e,
    src,
    parentSpanInst?,
    functionName?
  ): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    bh.errorFunName = functionName;
    this.tracerService.sendData(parentSpanInst, bh, true);
    if (bh.web.next) {
      bh.web.next(e);
    } else {
      throw e;
    }
  }
  //appendnew_flow_sendEmail_Catch
}
