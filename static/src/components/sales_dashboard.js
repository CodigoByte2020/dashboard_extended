/** @odoo-module */

import { registry } from "@web/core/registry";
import { Component, onWillStart, useRef, onMounted } from "@odoo/owl";
import { KpiCard } from "./kpi_card/kpi_card";
import { ChartRenderer } from "./chart_renderer/chart_renderer";

export class SalesDashboard extends Component {
    setup() {

    }
}

SalesDashboard.template = "dashboard_extended.SalesDashboard";
SalesDashboard.components = { KpiCard, ChartRenderer };

registry.category("actions").add("owl.sales_dashboard", SalesDashboard);
