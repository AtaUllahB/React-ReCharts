import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';



class Graph extends Component {

    state = {
        barData: [],
        datesForSeven: [],
        datesForThirty: [],
    }

    async componentDidMount() {
        let testDateForSeven;
        testDateForSeven = new Date(Date.now() - 8 * 24 * 60 * 60 * 1000)
        var datesForSeven = new Date(testDateForSeven),
            month = '' + (datesForSeven.getMonth() + 1),
            day = '' + datesForSeven.getDate(),
            year = datesForSeven.getFullYear();

        var from_date_seven = year + '-' + month + '-' + day;

        const date = new Date(from_date_seven);
        let datesCollectionForSeven = []
        for (let days = 1; days <= 7; days++) {
            const newDateForSeven = new Date(date.getTime() + days * 1000 * 60 * 60 * 24);
            var datesForSeven = new Date(newDateForSeven),
                month = '' + (datesForSeven.getMonth() + 1),
                day = '' + datesForSeven.getDate(),
                year = datesForSeven.getFullYear();
            if (month.length < 2)
                month = '0' + month;
            if (day.length < 2)
                day = '0' + day;
            datesCollectionForSeven.push(`${year}-${month}-${day}`);
        }

        // const { data } = await SuperFetch.get(`api/user/client-data-count`);
        // const responseForSeven = await SuperFetch.get(`api/user/client-data-count?from_date=${from_date_seven}`);


const responseForSeven = {
                            "status_code":200,
                            "data" : [
                                {
                                    "count": "1",
                                    "date" : "2020-04-27"
                                },

                            {
                                    "count": "7",
                                    "date" : "2020-04-26"
                                },

                            {
                                    "count": "1",
                                    "date" : "2020-04-25"
                                },

                            {
                                    "count": "3",
                                    "date" : "2020-04-24"
                                },

                            {
                                    "count": "5",
                                    "date" : "2020-04-22"
                                },

                            {
                                    "count": "8",
                                    "date" : "2020-04-21"
                                }

                            ]

                            }

console.log(responseForSeven);

                        
        var arrayForSeven = [{
            "name": "",
            "clients": "",
        }];
        responseForSeven.data.forEach(function (obj) {
            arrayForSeven.push({ date: obj.date, count: obj.count });
        })

        arrayForSeven.shift();

        var datesObjectSeven = [{
            "name": "",
            "clients": "",
        }];

        datesObjectSeven.shift();

        let flagforSeven = 0;
        for (let days = 0; days < 7; days++) {
            flagforSeven = 0
            for (let j = 0; j < arrayForSeven.length; j++) {
                if (datesCollectionForSeven[days] == arrayForSeven[j].date) {
                    datesObjectSeven.push({ name: datesCollectionForSeven[days], clients: arrayForSeven[j].count });
                    flagforSeven = 1;
                }
            }
            if (flagforSeven == 0) {
                datesObjectSeven.push({ name: datesCollectionForSeven[days], clients: "0" })
            }
        }
        datesObjectSeven.forEach(element => {
            const name = element.name.split('-')
            element.name = name[1] + "-" + name[2];
        })

        ////--------------for 30 days--------////

        let testDate30;
        testDate30 = new Date(Date.now() - 31 * 24 * 60 * 60 * 1000)
        var datesForThirty = new Date(testDate30),
            month = '' + (datesForThirty.getMonth() + 1),
            day = '' + datesForThirty.getDate(),
            year = datesForThirty.getFullYear();

        var from_date_thirty = year + '-' + month + '-' + day;

        const date30 = new Date(from_date_thirty);
        let datesCollectionForThirty = []

        for (var days = 1; days <= 30; days++) {
            const newDateForThirty = new Date(date30.getTime() + days * 1000 * 60 * 60 * 24);
            var datesForThirty = new Date(newDateForThirty),
                month = '' + (datesForThirty.getMonth() + 1),
                day = '' + datesForThirty.getDate(),
                year = datesForThirty.getFullYear();
            if (month.length < 2)
                month = '0' + month;
            if (day.length < 2)
                day = '0' + day;
            datesCollectionForThirty.push(`${year}-${month}-${day}`);
        }
        // const responseForThirty = await SuperFetch.get(`api/user/client-data-count?from_date=${from_date_thirty}`);

        const responseForThirty = {
                            "status_code":200,
                            "data" : [
                                {
                                    "count": "6",
                                    "date" : "2020-04-02"
                                },
                                {
                                    "count": "2",
                                    "date" : "2020-04-05"
                                },
                                {
                                    "count": "8",
                                    "date" : "2020-04-11"
                                },

                                {
                                    "count": "8",
                                    "date" : "2020-04-12"
                                },

                            {
                                    "count": "7",
                                    "date" : "2020-04-13"
                                },

                            {
                                    "count": "1",
                                    "date" : "2020-04-14"
                                },

                            {
                                    "count": "3",
                                    "date" : "2020-04-12"
                                },

                            {
                                    "count": "5",
                                    "date" : "2020-04-16"
                                },

                            {
                                    "count": "8",
                                    "date" : "2020-04-17"
                                },

                            {
                                    "count": "5",
                                    "date" : "2020-04-18"
                                },

                            {
                                    "count": "5",
                                    "date" : "2020-04-19"
                                },

                            {
                                    "count": "5",
                                    "date" : "2020-04-20"
                                },

                            ]

                            }


        var arrayForThirty = [{
            "name": "",
            "clients": "",
        }];
        responseForThirty.data.forEach(function (obj) {
            arrayForThirty.push({ date: obj.date, count: obj.count });
        })

        arrayForThirty.shift();

        var datesObjectThirty = [{
            "name": "",
            "clients": "",
        }];

        datesObjectThirty.shift();

        let flagforThirty = 0;
        for (let days = 0; days < 30; days++) {
            flagforThirty = 0
            for (let j = 0; j < arrayForThirty.length; j++) {
                if (datesCollectionForThirty[days] == arrayForThirty[j].date) {
                    datesObjectThirty.push({ name: datesCollectionForThirty[days], clients: arrayForThirty[j].count });
                    flagforThirty = 1;
                }
            }
            if (flagforThirty == 0) {
                datesObjectThirty.push({ name: datesCollectionForThirty[days], clients: "0" })
            }
        }

        datesObjectThirty.forEach(element => {
            const name = element.name.split('-')
            element.name = name[1] + "-" + name[2];
        })


        this.setState({
            // barData: data,
            datesForSeven: datesObjectSeven,
            datesForThirty: datesObjectThirty,
        })
    }


    render() {
        let { barData, datesForSeven, datesForThirty } = this.state;

        let maxYforSeven;
        let arrayForSeven = [];
        datesForSeven.forEach(element => {
            maxYforSeven = element.clients;
            arrayForSeven.push((maxYforSeven));
        });

        let maxValueForSeven = Math.max(...arrayForSeven);

        let maxYforThirty;
        let arrayForThirty = [];
        datesForThirty.forEach(element => {
            maxYforThirty = element.clients;
            arrayForThirty.push((maxYforThirty));
        });

        let maxValueForThirty = Math.max(...arrayForThirty);

        return (
            <main>  
                <div className="row text-center mb-4 mt-5">
                    <div className="col-md-6">
                        <h3>
                            {/* <IntlMessages id="title.total_clients_registered" /> */}
                        </h3>
                        <p>
                            {barData.all_clients}
                        </p>
                    </div>
                    <div className="col-md-6">
                        <h3>
                            {/* <IntlMessages id="title.total_clients_casesClosed" /> */}
                        </h3>
                        <p>
                            {barData.Inactive}
                        </p>
                    </div>
                </div>
                <div className="row mt-10">
                    <div className="col-md-12 justify-content-center text-center col-xs-12">
                        {maxValueForSeven == 0 ? <h3 style={{ textAlign: "center" }}></h3>
                            : <h3 style={{ textAlign: "center" }}>
                                {/* <IntlMessages id="title.total_clients_added_lastWeek" /> */}
                            </h3>
                        }
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart width={1000} height={400}
                                data={datesForSeven}
                                margin={{ top: 20, right: 40, left: 40, bottom: 5 }}
                            >
                                <XAxis
                                    dataKey='name'
                                    domain={[0, maxValueForSeven]}
                                />
                                <YAxis type="number"
                                    domain={[0, maxValueForSeven]}
                                    allowDecimals={false}
                                    allowDataOverflow={false}
                                />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="clients" name="Clients" fill="#00c9ff" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-12 justify-content-center text-center col-xs-12">
                        {maxValueForThirty == 0 ? <h3 style={{ textAlign: "center" }}></h3>
                            : <h3 style={{ textAlign: "center" }}>
                                {/* <IntlMessages id="title.total_clients_added_lastMonth" /> */}
                            </h3>
                        }
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart width={1000} height={400}
                                data={datesForThirty}
                                margin={{ top: 20, right: 40, left: 40, bottom: 5 }}>
                                <XAxis
                                    dataKey='name'
                                    domain={[0, maxValueForThirty]}
                                />
                                <YAxis type="number"
                                    domain={[0, maxValueForThirty]}
                                    allowDecimals={false}
                                    allowDataOverflow={false}
                                    tickCount={6}
                                />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="clients" name="Clients" fill="#00c9ff" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                </div>
            </main>
        );
    }
}

export default Graph;