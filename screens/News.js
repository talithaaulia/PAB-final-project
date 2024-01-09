import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { WebView } from 'react-native-webview';

const ChefJeanWebsiteScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chef Jean Pierre Website</Text>
      <WebView
        source={{ uri: 'https://chefjeanpierre.com/' }}
        style={styles.webView}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
    padding: 8,
    backgroundColor: '#3498db',
    color: '#fff',
  },
  webView: {
    flex: 1,
  },
});

export default ChefJeanWebsiteScreen;
