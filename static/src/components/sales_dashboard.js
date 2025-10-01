/** @odoo-module */

import { registry } from "@web/core/registry";
import { Component } from "@odoo/owl";
import { KpiCard } from "./kpi_card/kpi_card";

export class SalesDashboard extends Component {

}

SalesDashboard.template = "dashboard_extended.SalesDashboard";
SalesDashboard.components = { KpiCard };

registry.category("actions").add("owl.sales_dashboard", SalesDashboard);
//10:00