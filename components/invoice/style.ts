import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
    page: {
        backgroundColor: "#fff",
        color: "#262626",
        fontFamily: "Helvetica",
        fontSize: 12,
        padding: 40,
    },
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    title: {
        fontSize: 20,
        color: "#2b5a96",
    },
    textBold: {
        fontFamily: "Helvetica-Bold",
    },
    spaceY: {
        display: "flex",
        flexDirection: "column",
        gap: 2,
    },
    billTo: {
        marginBottom: 10,
    },
    table: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#555",
    },
    tableHeader: {
        backgroundColor: "#eaeaea",
        borderBottomWidth: 1,
        borderBottomColor: "#555",
    },
    td: {
        padding: 6,
        borderRightWidth: 1,
        borderRightColor: "#555",
    },
    tdFit: {
        padding: 6,
        borderRightWidth: 1,
        borderRightColor: "#555",
    },
    totals: {
        display: "flex",
        alignItems: "flex-end",
        marginTop: 12,
    },
    companyRight: {
        alignItems: "flex-end",
        textAlign: "right",
        color: "#b58f33",
    },
    logoBox: {
        width: 120,
        height: "auto",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    footerNote: {
        marginTop: 30,
    },
    footer: {
        position: 'absolute',
        bottom: 30,
        left: 40,
        right: 40,
        textAlign: 'center',
        paddingTop: 10,
    },
    footerText: {
        fontSize: 12,
        color: "#b58f33",
        marginBottom: 3,
    },
});