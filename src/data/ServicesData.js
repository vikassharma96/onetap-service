import {
  ServiceModel,
  SubCategory,
  CategoryDescription,
} from '../models/ServiceModel';

const SERVICES = [
  new ServiceModel(
    'dde26e6e-ac9a-4d90-956a-4772edab3880',
    'Cleaning Service',
    require('../assets/images/cleaning.jpg'),
    [
      new SubCategory(
        '0d7a33fd-94f4-4380-be6c-c915b62014db',
        'Bathroom Cleaning',
        '',
        [
          new CategoryDescription(
            'High Touch Point Cleaning',
            'High touch surfaces such as handles, mirrors & fittings are wiped down spotless.',
          ),
          new CategoryDescription(
            'Eliminated build up',
            'Extensive cleaning of all areas helps clear build up of grins & scaling spotless.',
          ),
          new CategoryDescription(
            'Professional Tools & Chemicals',
            'Diversity based chemicals, microfibres, grout brush & putty blades are used to free dirt accumulation from in between surfaces.',
          ),
        ],
        'ratings will be udpated soon',
        '399',
        '55 min',
      ),
      new SubCategory(
        '5849a4eb-8f5d-4eb4-8a90-91d7d596f512',
        'Kitchen Cleaning',
        '',
        [
          new CategoryDescription(
            'High Touch Point Cleaning',
            'High touch surfaces such as handles, mirrors & fittings are wiped down spotless.',
          ),
          new CategoryDescription(
            'Eleminated build up',
            'Extensive cleaning of all areas helps clear build up of grins & scaling spotless.',
          ),
          new CategoryDescription(
            'Professional Tools & Chemicals',
            'Diversity based chemicals, microfibres, grout brush & putty blades are used to free dirt accumulation from in between surfaces.',
          ),
        ],
        'ratings will be udpated soon',
        '299',
        '45 min',
      ),
    ],
  ),
  new ServiceModel(
    '1b7fae03-51ba-44c2-b5cb-7f9a76869879',
    'AC Repair Service',
    require('../assets/images/acrepair.jpeg'),
    [],
  ),
  new ServiceModel(
    '162f2940-bf11-4f9c-95f2-f0cdf473cd94',
    'Electrician',
    require('../assets/images/electrician.jpeg'),
    [],
  ),
  new ServiceModel(
    '9455e328-e1fc-452a-a5a5-9ec6eb9df3e0',
    'Plumber',
    require('../assets/images/plumber.jpeg'),
    [],
  ),
];

export default SERVICES;
