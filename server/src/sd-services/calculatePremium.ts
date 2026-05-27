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
export class calculatePremium {
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
    this.serviceName = 'calculatePremium';
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
      instance = new calculatePremium(
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
    //appendnew_flow_calculatePremium_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: calculatePremium');
    //appendnew_flow_calculatePremium_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: calculatePremium');

    this.app['post'](
      `${this.serviceBasePath}/calculatePremium`,
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
          bh = await this.prepareBasePremiumBody(bh, parentSpanInst);
          //appendnew_next_sd_8C3PVDdOEFnocPdg
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_8C3PVDdOEFnocPdg');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_calculatePremium_HttpIn
  }
  //   service flows_calculatePremium

  //appendnew_flow_calculatePremium_start

  async prepareBasePremiumBody(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepareBasePremiumBody',
      parentSpanInst
    );
    try {
      bh.local.basePremiumBody = {
        pageNumber: 0,
        pageSize: 1,
        multiplicity: 'multiple',
        filter: { vehicle_type: bh.input.body.vehicle_type },
        select: ['base_premium'],
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.fetchBasePremium(bh, parentSpanInst);
      //appendnew_next_prepareBasePremiumBody
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PFVIbsdBlpCwmIMD',
        spanInst,
        'prepareBasePremiumBody'
      );
    }
  }

  async fetchBasePremium(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: 'https://reels-pt.neutrinos-apps.com/integration/api/records/filter/72b58c39-817f-4204-95dc-4f5eec8fd929/aa6b3e75-a1c1-404e-b8ca-1569703836d9/063df705-39eb-4d74-9b88-10c1b0c4522c',
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
        body: bh.local.basePremiumBody,
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

      bh.local.basePremiumResponse = responseMsg;
      bh = await this.unpackBasePremium(bh, parentSpanInst);
      //appendnew_next_fetchBasePremium
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Hcx7uKHqhcaUGwF9');
    }
  }

  async unpackBasePremium(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'unpackBasePremium',
      parentSpanInst
    );
    try {
      const records = bh.local.basePremiumResponse?.payload?.records || [];
      bh.local.base_premium = records[0]?.base_premium || 0;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.prepareAddOnPricingBody(bh, parentSpanInst);
      //appendnew_next_unpackBasePremium
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uffUBgDkYg3HcoCK',
        spanInst,
        'unpackBasePremium'
      );
    }
  }

  async prepareAddOnPricingBody(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepareAddOnPricingBody',
      parentSpanInst
    );
    try {
      bh.local.addOnPricingBody = {
        pageNumber: 0,
        pageSize: 50,
        multiplicity: 'multiple',
        filter: {},
        select: ['add_on_code', 'price'],
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.fetchAddOnPricing(bh, parentSpanInst);
      //appendnew_next_prepareAddOnPricingBody
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uYGp4azSmKusuGe4',
        spanInst,
        'prepareAddOnPricingBody'
      );
    }
  }

  async fetchAddOnPricing(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: 'https://reels-pt.neutrinos-apps.com/integration/api/records/filter/72b58c39-817f-4204-95dc-4f5eec8fd929/ff52ff1c-fc47-4134-b29f-2a499d257aa9/656569c1-9ea4-4a8a-a27b-6b7bcfc33ff0',
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
        body: bh.local.addOnPricingBody,
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

      bh.local.addOnPricingResponse = responseMsg;
      bh = await this.calculateAddOnTotal(bh, parentSpanInst);
      //appendnew_next_fetchAddOnPricing
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Q6WUhtUNMo5vICAj');
    }
  }

  async calculateAddOnTotal(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'calculateAddOnTotal',
      parentSpanInst
    );
    try {
      const allAddOns = bh.local.addOnPricingResponse?.payload?.records || [];
      const selectedCodes = bh.input.body.add_ons || [];

      let total = 0;
      for (const code of selectedCodes) {
        const found = allAddOns.find((a) => a.add_on_code === code);
        if (found) {
          total += Number(found.price) || 0;
        }
      }

      bh.local.addon_total = total;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.preparePlanMultiplierBody(bh, parentSpanInst);
      //appendnew_next_calculateAddOnTotal
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aMovfFo3pEEVVfJR',
        spanInst,
        'calculateAddOnTotal'
      );
    }
  }

  async preparePlanMultiplierBody(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'preparePlanMultiplierBody',
      parentSpanInst
    );
    try {
      bh.local.planMultiplierBody = {
        pageNumber: 0,
        pageSize: 1,
        multiplicity: 'multiple',
        filter: { plan_code: bh.input.body.plan_code },
        select: ['plan_multiplier'],
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.fetchPlanMultiplier(bh, parentSpanInst);
      //appendnew_next_preparePlanMultiplierBody
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0eHQPLoS7T0ZjbkE',
        spanInst,
        'preparePlanMultiplierBody'
      );
    }
  }

  async fetchPlanMultiplier(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: 'https://reels-pt.neutrinos-apps.com/integration/api/records/filter/72b58c39-817f-4204-95dc-4f5eec8fd929/adffdff3-0d17-47a1-908a-cfa363eef690/b454cc5f-32c9-4c65-b503-cfe07f1ee1af',
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
        body: bh.local.planMultiplierBody,
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

      bh.local.planMultiplierResponse = responseMsg;
      bh = await this.unpackPlanMultiplier(bh, parentSpanInst);
      //appendnew_next_fetchPlanMultiplier
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HBApcNrFhYH3BtTr');
    }
  }

  async unpackPlanMultiplier(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'unpackPlanMultiplier',
      parentSpanInst
    );
    try {
      const records = bh.local.planMultiplierResponse?.payload?.records || [];
      bh.local.plan_multiplier = Number(records[0]?.plan_multiplier) || 1;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.prepareWf1Body(bh, parentSpanInst);
      //appendnew_next_unpackPlanMultiplier
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_X9EOmGh5xjYWcFZS',
        spanInst,
        'unpackPlanMultiplier'
      );
    }
  }

  async prepareWf1Body(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepareWf1Body',
      parentSpanInst
    );
    try {
      bh.local.wf1Body = {
        workflowId: 'd967c6f5-f744-4321-9cdc-b5df97cd994d',
        version: '1.0.1',
        inputObj: {
          base_premium: bh.local.base_premium,
          addon_total: bh.local.addon_total,
          plan_multiplier: bh.local.plan_multiplier,
        },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.callReelsWf1(bh, parentSpanInst);
      //appendnew_next_prepareWf1Body
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RTM3mczUMtQ5HjVO',
        spanInst,
        'prepareWf1Body'
      );
    }
  }

  async callReelsWf1(bh, parentSpanInst) {
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
        cookies: {},
        authType: undefined,
        body: bh.local.wf1Body,
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

      bh.local.wf1Response = responseMsg;
      bh = await this.unpackResponse(bh, parentSpanInst);
      //appendnew_next_callReelsWf1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_rZggXsAmk0tr21Ks');
    }
  }

  async unpackResponse(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'unpackResponse',
      parentSpanInst
    );
    try {
      const result = bh.local.wf1Response?.payload?.result || {};

      bh.local.output = {
        success: true,
        base_premium: bh.local.base_premium,
        addon_total: bh.local.addon_total,
        plan_multiplier: bh.local.plan_multiplier,
        final_premium: Number(result.final_premium),
        requires_manual_approval:
          result.requires_manual_approval === true ||
          result.requires_manual_approval === 'true',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_4yf45jTMHmzBq4Db(bh, parentSpanInst);
      //appendnew_next_unpackResponse
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Hubm4rMgf71E4fwT',
        spanInst,
        'unpackResponse'
      );
    }
  }

  async sd_4yf45jTMHmzBq4Db(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.output);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_4yf45jTMHmzBq4Db');
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
  //appendnew_flow_calculatePremium_Catch
}
