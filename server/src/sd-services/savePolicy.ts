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
import { GenericRDBMSOperations } from '../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
//append_imports_end
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export class savePolicy {
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
    this.serviceName = 'savePolicy';
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
      instance = new savePolicy(
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
    //appendnew_flow_savePolicy_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: savePolicy');
    //appendnew_flow_savePolicy_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: savePolicy');

    this.app['post'](
      `${this.serviceBasePath}/savePolicy`,
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
          bh = await this.sd_mzjrpFRhUCaVtksS(bh, parentSpanInst);
          //appendnew_next_sd_uZlVTgLV3CHHAnOm
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_uZlVTgLV3CHHAnOm');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_savePolicy_HttpIn
  }
  //   service flows_savePolicy

  //appendnew_flow_savePolicy_start

  async sd_mzjrpFRhUCaVtksS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_mzjrpFRhUCaVtksS',
      parentSpanInst
    );
    try {
      const v = bh.input.body;

      const escape = (s) => {
        if (s === null || s === undefined) return 'NULL';
        if (typeof s === 'boolean') return s ? 'TRUE' : 'FALSE';
        if (typeof s === 'number') return String(s);
        return `'${String(s).replace(/'/g, "''")}'`;
      };

      bh.local.queryParams = `INSERT INTO policies (
  customer_name, customer_email, customer_phone,
  vehicle_type, vehicle_model, is_high_end,
  plan_code,
  base_premium, addon_total, final_premium,
  discount_pct, discounted_premium,
  requires_manual_approval, underwriter_action, issuer_action,
  status
) VALUES (
  ${escape(v.customer_name)},
  ${escape(v.customer_email)},
  ${escape(v.customer_phone || null)},
  ${escape(v.vehicle_type)},
  ${escape(v.vehicle_model)},
  ${escape(v.is_high_end ?? null)},
  ${escape(v.plan_code)},
  ${escape(v.base_premium ?? null)},
  ${escape(v.addon_total ?? null)},
  ${escape(v.final_premium ?? null)},
  ${escape(v.discount_pct ?? null)},
  ${escape(v.discounted_premium ?? null)},
  ${escape(v.requires_manual_approval ?? null)},
  ${escape(v.underwriter_action || null)},
  ${escape(v.issuer_action || null)},
  ${escape(v.status)}
) RETURNING id, created_at`;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_wcgMAKJdeMsHsMSR(bh, parentSpanInst);
      //appendnew_next_sd_mzjrpFRhUCaVtksS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mzjrpFRhUCaVtksS',
        spanInst,
        'sd_mzjrpFRhUCaVtksS'
      );
    }
  }

  async sd_wcgMAKJdeMsHsMSR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wcgMAKJdeMsHsMSR',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_Nf3xcwwW2teYXxWB'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = [];
      params = params ? params : [];
      bh.local.dbResult = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.queryParams,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_4VEepQ7V5CoIY2pS(bh, parentSpanInst);
      //appendnew_next_sd_wcgMAKJdeMsHsMSR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wcgMAKJdeMsHsMSR',
        spanInst,
        'sd_wcgMAKJdeMsHsMSR'
      );
    }
  }

  async sd_4VEepQ7V5CoIY2pS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4VEepQ7V5CoIY2pS',
      parentSpanInst
    );
    try {
      const row =
        bh.local.dbResult?.[0] || bh.local.dbResult?.rows?.[0] || null;

      if (row) {
        bh.local.output = {
          success: true,
          policy_id: row.id,
          created_at: row.created_at,
        };
      } else {
        bh.local.output = {
          success: false,
          error: 'Failed to save policy',
          debug: bh.local.dbResult,
        };
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_fH0XmNQUZ4FgvFfk(bh, parentSpanInst);
      //appendnew_next_sd_4VEepQ7V5CoIY2pS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4VEepQ7V5CoIY2pS',
        spanInst,
        'sd_4VEepQ7V5CoIY2pS'
      );
    }
  }

  async sd_fH0XmNQUZ4FgvFfk(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.output);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fH0XmNQUZ4FgvFfk');
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
  //appendnew_flow_savePolicy_Catch
}
