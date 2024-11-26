import { Page, Text, View, Document, StyleSheet} from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        padding: 30,
        flexDirection: 'column',
    },
    section: {
        margin: 20, 
        textAlign: 'center'
    },
});

const MyDocument = (title: string, description: string, date: string) => {
    return (
        <Document title={title}>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text>{title}</Text>
                    <Text>{date}</Text>
                </View>
                <View style={styles.section}>
                    <Text>{description}</Text>
                </View>
            </Page>
        </Document>
    )
}

export default MyDocument