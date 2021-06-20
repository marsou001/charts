export interface Data {
    MAC000002: Device;
    MAC000003: Device;
}

interface Device {
    _id: number;
    deviceID: string;
    constantData: ConstantData;
    lastMonthData: LastMonthData[];
    monthlyData: MonthlyData[];
}

interface ConstantData {
    clientNumber: number,
    longitude: number,
    latitude: number,
    address: string,
    tarification: string,
}

interface LastMonthData {
    id: number;
    title: string;
    content: number;
}

interface MonthlyData {
    id: number,
    date: string,
    longitude: number,
    latitude: number,
    consumption: number,
    dynamicPrice: number,
}

export interface Devices {
    _id: number;
    deviceID: keyof Data;
}

export const devices: Devices[] = [
    {
        _id: 2,
        deviceID: 'MAC000002',
    },
    {
        _id:32,
        deviceID: 'MAC000003',
    },
];

export const data = {
    MAC000002: {
        _id: 2,
        deviceID: 'MAC000002',
        constantData: {
            clientNumber: 44199987,
            longitude: -6.8407772,
            latitude: 33.9601172,
            address: '6 Avenue Bir Kacem, Rabat, Morocco',
            tarification: 'Eclairage patente',
        },
        lastMonthData: [
            {
                id: 1,
                title: 'Client number',
                content: 68091604,
            },
            {
                id: 2,
                title: 'Consumption',
                content: 414.8970004,
            },
            {
                id: 3,
                title: 'Dynamic price',
                content: 477.131550459999,
            },
            {
                id: 4,
                title: 'Fraud level',
                content: 1.1158631415241,
            },
            {
                id: 5,
                title: 'Voltage arrivage',
                content: 239.790446841294,
            },
            {
                id: 6,
                title: 'Frequency',
                content: 49.824345146379,
            },
        ],
        monthlyData: [
            {
                id: 1,
                date: "31/10/2012",
                longitude: -6.8407772,
                latitude: 33.9601172,
                consumption: 277.7460001,
                dynamicPrice: 319.407900115,
            },
            {
                id: 2,
                date: "30/11/2012",
                longitude: -6.8407772,
                latitude: 33.9601172,
                consumption: 345.0199998,
                dynamicPrice: 396.772999770001,
            },
            {
                id: 3,
                date: "31/12/2012",
                longitude: -6.8407772,
                latitude: 33.9601172,
                consumption: 355.762000199999,
                dynamicPrice: 409.12630023,
            },
            {
                id: 4,
                date: "31/01/2013",
                longitude: -6.8407772,
                latitude: 33.9601172,
                consumption: 360.0820001,
                dynamicPrice: 407.374490114999,
            },
            {
                id: 5,
                date: "28/02/2013",
                longitude: -6.8407772,
                latitude: 33.9601172,
                consumption: 381.8380003,
                dynamicPrice: 447.14010031,
            },
            {
                id: 6,
                date: "31/03/2013",
                longitude: -6.8407772,
                latitude: 33.9601172,
                consumption: 480.1699999,
                dynamicPrice: 538.416969966,
            },
            {
                id: 7,
                date: "30/04/2013",
                longitude: -6.8407772,
                latitude: 33.9601172,
                consumption: 362.7350005,
                dynamicPrice: 417.277200575001,
            },
            {
                id: 8,
                date: "31/05/2013",
                longitude: -6.8407772,
                latitude: 33.9601172,
                consumption: 304.0640001,
                dynamicPrice: 347.948510161,
            },
            {
                id: 9,
                date: "30/06/2013",
                longitude: -6.8407772,
                latitude: 33.9601172,
                consumption: 300.123,
                dynamicPrice: 342.867059999999,
            },
            {
                id: 10,
                date: "31/07/2013",
                longitude: -6.8407772,
                latitude: 33.9601172,
                consumption: 271.320999899999,
                dynamicPrice: 308.815119885,
            },
            {
                id: 11,
                date: "31/08/2013",
                longitude: -6.8407772,
                latitude: 33.9601172,
                consumption: 270.049999899999,
                dynamicPrice: 315.242759884999,
            },
            {
                id: 12,
                date: "30/09/2013",
                longitude: -6.8407772,
                latitude: 33.9601172,
                consumption: 321.740000099999,
                dynamicPrice: 371.287130115,
            },
            {
                id: 13,
                date: "31/10/2013",
                longitude: -6.8407772,
                latitude: 33.9601172,
                consumption: 378.3519997,
                dynamicPrice: 437.065239562999,
            },
            {
                id: 14,
                date: "30/11/2013",
                longitude: -6.8407772,
                latitude: 33.9601172,
                consumption: 410.1239999,
                dynamicPrice: 471.519869838999,
            },
            {
                id: 15,
                date: "31/12/2013",
                longitude: -6.8407772,
                latitude: 33.9601172,
                consumption: 376.965,
                dynamicPrice: 426.153059918999,
            },
            {
                id: 16,
                date: "31/01/2014",
                longitude: -6.8407772,
                latitude: 33.9601172,
                consumption: 490.1489998,
                dynamicPrice: 563.67134977,
            },
            {
                id: 17,
                date: "28/02/2014",
                longitude: -6.8407772,
                latitude: 33.9601172,
                consumption: 414.8970004,
                dynamicPrice: 477.131550459999,
            },
        ]
    },
    MAC000003: {
        _id: 3,
        deviceID: 'MAC000003',
        constantData: {
            clientNumber: 66461572,
            longitude: -6.8412343,
            latitude: 33.9596989,
            address: '8 Avenue Bir Kacem, Rabat, Morocco',
            tarification: 'Usage domestique',
        },
        lastMonthData: [
            {
                id: 1,
                title: 'Client number',
                content: 9756338,
            },
            {
                id: 2,
                title: 'Consumption',
                content: 527.9960003,
            },
            {
                id: 3,
                title: 'Dynamic price',
                content: 607.195400344999,
            },
            {
                id: 4,
                title: 'Fraud level',
                content: 1.1141304347826,
            },
            {
                id: 5,
                title: 'Voltage arrivage',
                content: 239.850539291217,
            },
            {
                id: 6,
                title: 'Frequency',
                content: 49.7827426810477,
            },
        ],
        monthlyData: [
            {
                id: 1,
                date: "29/02/2012",
                longitude: -6.84123429999999,
                latitude: 33.9596989,
                consumption: 178.8539995,
                dynamicPrice: 205.682099425,
            },
            {
                id: 2,
                date: "31/03/2012",
                longitude: -6.84123429999999,
                latitude: 33.9596989,
                consumption: 552.518000799999,
                dynamicPrice: 635.395700920001,
            },
            {
                id: 3,
                date: "30/04/2012",
                longitude: -6.84123429999999,
                latitude: 33.9596989,
                consumption: 441.140000700001,
                dynamicPrice: 507.311000805,
            },
            {
                id: 4,
                date: "31/05/2012",
                longitude: -6.84123429999999,
                latitude: 33.9596989,
                consumption: 412.956999799999,
                dynamicPrice: 474.90054977,
            },
            {
                id: 5,
                date: "30/06/2012",
                longitude: -6.84123429999999,
                latitude: 33.9596989,
                consumption: 390.630999999999,
                dynamicPrice: 449.225649999999,
            },
            {
                id: 6,
                date: "31/07/2012",
                longitude: -6.84123429999999,
                latitude: 33.9596989,
                consumption: 382.995999599999,
                dynamicPrice: 440.44539954,
            },
            {
                id: 7,
                date: "31/08/2012",
                longitude: -6.84123429999999,
                latitude: 33.9596989,
                consumption: 396.296,
                dynamicPrice: 455.7404,
            },
            {
                id: 8,
                date: "30/09/2012",
                longitude: -6.84123429999999,
                latitude: 33.9596989,
                consumption: 391.966999699999,
                dynamicPrice: 450.762049654999,
            },
            {
                id: 9,
                date: "31/10/2012",
                longitude: -6.84123429999999,
                latitude: 33.9596989,
                consumption: 556.656001199999,
                dynamicPrice: 640.15440138,
            },
            {
                id: 10,
                date: "30/11/2012",
                longitude: -6.84123429999999,
                latitude: 33.9596989,
                consumption: 949.370999799998,
                dynamicPrice: 1091.77664976999,
            },
            {
                id: 11,
                date: "31/12/2012",
                longitude: -6.84123429999999,
                latitude: 33.9596989,
                consumption: 1242.5649991,
                dynamicPrice: 1428.94974896499,
            },
            {
                id: 12,
                date: "31/01/2013",
                longitude: -6.84123429999999,
                latitude: 33.9596989,
                consumption: 1070.27500289999,
                dynamicPrice: 1199.40155307899,
            },
            {
                id: 13,
                date: "28/02/2013",
                longitude: -6.84123429999999,
                latitude: 33.9596989,
                consumption: 1075.07500089999,
                dynamicPrice: 1208.501220991,
            },
            {
                id: 14,
                date: "31/03/2013",
                longitude: -6.84123429999999,
                latitude: 33.9596989,
                consumption: 955.680999099999,
                dynamicPrice: 1044.97708878999,
            },
            {
                id: 15,
                date: "30/04/2013",
                longitude: -6.84123429999999,
                latitude: 33.9596989,
                consumption: 718.2579995,
                dynamicPrice: 809.981849482,
            },
            {
                id: 16,
                date: "31/05/2013",
                longitude: -6.84123429999999,
                latitude: 33.9596989,
                consumption: 374.1729999,
                dynamicPrice: 427.300329885001,
            },
            {
                id: 17,
                date: "30/06/2013",
                longitude: -6.84123429999999,
                latitude: 33.9596989,
                consumption: 359.974999599999,
                dynamicPrice: 409.642699539999,
            },
            {
                id: 18,
                date: "31/07/2013",
                longitude: -6.84123429999999,
                latitude: 33.9596989,
                consumption: 368.700000699999,
                dynamicPrice: 417.316080769999,
            },
            {
                id: 19,
                date: "31/08/2013",
                longitude: -6.84123429999999,
                latitude: 33.9596989,
                consumption: 356.1170001,
                dynamicPrice: 415.094760034,
            },
            {
                id: 20,
                date: "30/09/2013",
                longitude: -6.84123429999999,
                latitude: 33.9596989,
                consumption: 358.8719999,
                dynamicPrice: 411.84583992,
            },
            {
                id: 21,
                date: "31/10/2013",
                longitude: -6.84123429999999,
                latitude: 33.9596989,
                consumption: 348.2709998,
                dynamicPrice: 396.256719805,
            },
            {
                id: 22,
                date: "30/11/2013",
                longitude: -6.84123429999999,
                latitude: 33.9596989,
                consumption: 537.0290011,
                dynamicPrice: 597.550310949999,
            },
            {
                id: 23,
                date: "31/12/2013",
                longitude: -6.84123429999999,
                latitude: 33.9596989,
                consumption: 506.8360002,
                dynamicPrice: 554.300840125,
            },
            {
                id: 24,
                date: "31/01/2014",
                longitude: -6.84123429999999,
                latitude: 33.9596989,
                consumption: 651.223998499999,
                dynamicPrice: 748.907598275,
            },
            {
                id: 25,
                date: "28/02/2014",
                longitude: -6.84123429999999,
                latitude: 33.9596989,
                consumption: 527.9960003,
                dynamicPrice: 607.195400344999,
            },
        ]
    },     
};

