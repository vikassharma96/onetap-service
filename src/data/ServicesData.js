import ServiceModel from '../models/ServiceModel';

const SERVICES = [
  new ServiceModel(
    1,
    'Cleaning Service',
    require('../assets/images/cleaning.jpg'),
    [
      new ServiceModel(11, 'Bathroom Cleaning', '', ''),
      new ServiceModel(12, 'Kitchen Cleaning', '', ''),
    ],
  ),
  new ServiceModel(
    2,
    'AC Repair Service',
    require('../assets/images/acrepair.jpeg'),
    [],
  ),
  new ServiceModel(
    3,
    'Electrician',
    require('../assets/images/electrician.jpeg'),
    [],
  ),
  new ServiceModel(4, 'Plumber', require('../assets/images/plumber.jpeg'), []),
];

export default SERVICES;
