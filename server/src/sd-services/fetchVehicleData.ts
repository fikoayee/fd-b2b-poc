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
export class fetchVehicleData {
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
    this.serviceName = 'fetchVehicleData';
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
      instance = new fetchVehicleData(
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
    //appendnew_flow_fetchVehicleData_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: fetchVehicleData');
    //appendnew_flow_fetchVehicleData_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: fetchVehicleData');

    this.app['post'](
      `${this.serviceBasePath}/fetchVehicleData`,
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
          bh = await this.prepareBody(bh, parentSpanInst);
          //appendnew_next_sd_FOYyJHCtkBZdXO36
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_FOYyJHCtkBZdXO36');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_fetchVehicleData_HttpIn
  }
  //   service flows_fetchVehicleData

  //appendnew_flow_fetchVehicleData_start

  async prepareBody(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepareBody',
      parentSpanInst
    );
    try {
      const model = bh.input.body.model;

      bh.local.reelsBody = {
        pageNumber: 0,
        pageSize: 10,
        multiplicity: 'multiple',
        filter: {
          model: model,
        },
        select: ['is_high_end', 'vehicle_type', 'model'],
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.callReels(bh, parentSpanInst);
      //appendnew_next_prepareBody
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_K5npQUvhTiZuu4Mx',
        spanInst,
        'prepareBody'
      );
    }
  }

  async callReels(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: 'https://reels-pt.neutrinos-apps.com/integration/api/records/filter/72b58c39-817f-4204-95dc-4f5eec8fd929/0ca3d917-08b1-49f4-85f1-481adc280b06/153d246f-a130-41b7-b952-a3b325779fb9',
        timeout: 30000,
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          token:
            'e803e1c6-f249-4c53-9df9-7ee9d4c598c1.4ff5e9318f47c28660472399a8d6f219f95c0bc0b007a785eae6b63913ad31d4',
        },
        followRedirects: true,
        cookies: {},
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
      bh = await this.unpack(bh, parentSpanInst);
      //appendnew_next_callReels
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5RUBu8IZcg3AAbRv');
    }
  }

  async unpack(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('unpack', parentSpanInst);
    try {
      const records = bh.local.response?.payload?.records || [];
      const vehicle = records[0] || null;

      if (vehicle) {
        bh.local.output = {
          success: true,
          vehicle: {
            vehicle_type: vehicle.vehicle_type,
            model: vehicle.model,
            is_high_end: vehicle.is_high_end,
          },
        };
      } else {
        bh.local.output = {
          success: false,
          error: 'Vehicle not found',
        };
      }
      this.tracerService.sendData(spanInst, bh);
      await this.httpOut(bh, parentSpanInst);
      //appendnew_next_unpack
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KOUfHQ8Gr55u6SYl',
        spanInst,
        'unpack'
      );
    }
  }

  async httpOut(bh, parentSpanInst) {
    try {
      bh.web.res.set({ 'Content-Type': 'application/json' });

      bh.web.res.status(200).send(bh.local.output);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_nTvte6u9b1DIZAMi');
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
  //appendnew_flow_fetchVehicleData_Catch
}
