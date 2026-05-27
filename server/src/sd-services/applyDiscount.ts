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
export class applyDiscount {
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
    this.serviceName = 'applyDiscount';
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
      instance = new applyDiscount(
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
    //appendnew_flow_applyDiscount_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: applyDiscount');
    //appendnew_flow_applyDiscount_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: applyDiscount');

    this.app['post'](
      `${this.serviceBasePath}/applyDiscount`,
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
          bh = await this.sd_2obRyVtPe5SMEOsV(bh, parentSpanInst);
          //appendnew_next_sd_A025B27PPvemayd0
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_A025B27PPvemayd0');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_applyDiscount_HttpIn
  }
  //   service flows_applyDiscount

  //appendnew_flow_applyDiscount_start

  async sd_2obRyVtPe5SMEOsV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2obRyVtPe5SMEOsV',
      parentSpanInst
    );
    try {
      bh.local.reelsBody = {
        workflowId: '47adebae-fe49-4ffb-8bd7-ae4d067a401f',
        version: '1.0.1',
        inputObj: {
          is_high_end: bh.input.body.is_high_end,
          final_premium: bh.input.body.final_premium,
        },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_71ICpKFxuZHSnjP5(bh, parentSpanInst);
      //appendnew_next_sd_2obRyVtPe5SMEOsV
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2obRyVtPe5SMEOsV',
        spanInst,
        'sd_2obRyVtPe5SMEOsV'
      );
    }
  }

  async sd_71ICpKFxuZHSnjP5(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: 'https://reels-pt.neutrinos-apps.com/integration/api/runtime/sync',
        timeout: 30000,
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          token:
            'e803e1c6-f249-4c53-9df9-7ee9d4c598c1.4ff5e9318f47c28660472399a8d6f219f95c0bc0b007a785eae6b63913ad31d4',
        },
        followRedirects: true,
        cookies: undefined,
        authType: undefined,
        body: bh.local.reelsBody,
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
      bh = await this.sd_Y9ht4BSemI0Gek1m(bh, parentSpanInst);
      //appendnew_next_sd_71ICpKFxuZHSnjP5
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_71ICpKFxuZHSnjP5');
    }
  }

  async sd_Y9ht4BSemI0Gek1m(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Y9ht4BSemI0Gek1m',
      parentSpanInst
    );
    try {
      const result = bh.local.response?.payload?.result || {};

      bh.local.output = {
        success: true,
        discount_pct: Number(result.discount_pct) || 0,
        discounted_premium: result.discounted_premium,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_BOt6aII9KnODXSVt(bh, parentSpanInst);
      //appendnew_next_sd_Y9ht4BSemI0Gek1m
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Y9ht4BSemI0Gek1m',
        spanInst,
        'sd_Y9ht4BSemI0Gek1m'
      );
    }
  }

  async sd_BOt6aII9KnODXSVt(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.output);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_BOt6aII9KnODXSVt');
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
  //appendnew_flow_applyDiscount_Catch
}
