import { Response, Request } from 'express';

import { get, controller, use } from '../decorators';

interface VehicleSummary {
  id: string;
  url: string;
  modelYear: string;
  media: [{ [key: string]: string }];
}

interface VehicleDetails {
  id: string;
  description: string;
  meta: [{ [key: string]: string }];
}

@controller('/api/vehicle')
class VehiclesController {
  @get('/')
  getAllVehicles(req: Request, res: Response) {
    const doc: VehicleSummary[] = require('../../server_api/vehicles.js');
    res.status(200).json({
      status: 'success',
      results: doc.length,
      data: {
        data: doc
      }
    });
  }

  @get('/:id')
  getOneVehicle(req: Request, res: Response) {
    const doc: VehicleDetails = require(`../../server_api/vehicle_${req.params.id}.js`);
    res.status(200).json({
      status: 'success',
      data: {
        data: doc
      }
    });
  }
}
