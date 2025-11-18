'use client';
import dynamic from 'next/dynamic';
import {
    Page,
    Text,
    View,
    Document,
    Image,
} from "@react-pdf/renderer";

const PDFDownloadLink = dynamic(
    () => import('@react-pdf/renderer').then((mod) => mod.PDFDownloadLink),
    { ssr: false, loading: () => <button className="flex items-center bg-gray-400 text-white px-4 py-2 rounded-md cursor-not-allowed">Loading...</button> }
);

import { styles } from "./style";
import { Table, TD, TH, TR } from "@ag-media/react-pdf-table";
import {
    tableData,
    companyInfo,
    invoiceMeta,
    recipient,
    subject,
} from "./data";

import logo from '@/components/invoice/logo.png';

const InvoicePDF = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.header}>
                <View style={styles.logoBox}>
                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                    <Image src={logo.src} />
                </View>

                <View style={styles.companyRight}>
                    <Text style={styles.textBold}>{companyInfo.name}</Text>
                    <Text>Phone: {companyInfo.phone}</Text>
                    <Text>Mail: {companyInfo.mail}</Text>
                </View>
            </View>

            <View style={{ marginVertical: 20 }}>
                <Text style={[styles.title, styles.textBold]}>Invoice</Text>
            </View>

            <View style={{ marginBottom: 20 }}>
                <Text>Date: {invoiceMeta.date}</Text>
            </View>

            <View style={styles.spaceY}>
                <Text style={[styles.billTo, styles.textBold]}>To: {recipient.name}</Text>
                <Text>Phone: {recipient.phone}</Text>
                <Text style={styles.textBold}>Company: {recipient.company}</Text>
                <Text>Address: {recipient.address}</Text>
            </View>

            <View style={{ marginTop: 20, marginBottom: 12 }}>
                <Text>Subject: {subject}</Text>
            </View>

            {/* Table */}
            <Table style={styles.table}>
                <TH style={[styles.tableHeader, styles.textBold]}>
                    <TD weighting={0.1} style={styles.tdFit}>SL</TD>
                    <TD weighting={0.25} style={styles.td}>Description</TD>
                    <TD weighting={0.2} style={styles.td}>Item Type</TD>
                    <TD weighting={0.15} style={styles.td}>Qty (pcs)</TD>
                    <TD weighting={0.15} style={styles.td}>Unit Price (BDT)</TD>
                    <TD weighting={0.15} style={styles.td}>Total (BDT)</TD>
                </TH>

                {tableData.map((item, index) => (
                    <TR key={index}>
                        <TD weighting={0.1} style={styles.tdFit}>{item.sl}</TD>
                        <TD weighting={0.25} style={styles.td}>{item.description}</TD>
                        <TD weighting={0.2} style={styles.td}>{item.itemType}</TD>
                        <TD weighting={0.15} style={styles.td}>{item.quantity}</TD>
                        <TD weighting={0.15} style={styles.td}>{item.unitPrice.toFixed(2)}</TD>
                        <TD weighting={0.15} style={styles.td}>{item.total.toFixed(2)}</TD>
                    </TR>
                ))}
            </Table>

            <Text style={styles.footerNote}>Thank you for your interest in Bobbin!</Text>
        </Page>
    </Document>
);

export default function Invoice2() {
    return (
        <div className="w-2xl mx-auto my-10">
            <div className="mt-6 flex justify-center">
                <PDFDownloadLink document={<InvoicePDF />} fileName="invoice.pdf">
                    <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                        Download PDF
                    </button>
                </PDFDownloadLink>
            </div>
        </div>
    );
}