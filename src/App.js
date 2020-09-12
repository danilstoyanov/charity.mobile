import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';

import { PanelHeader } from './components/PanelHeader'
import { StartView } from './views/StartView'
import { CreateView } from './views/CreateView'
import { FormView } from './views/FormView'
import { SnippetPreview } from './views/SnippetPreview'
import { PostView } from './views/PostView'
import { FormAdditionalView } from './views/FormAdditionalView'


import { NativeRouter, Route, BackButton } from "react-router-native";

const App = () => {
  const [actionType, setActionType] = useState('');

  return (
    <SafeAreaView style={styles.app}>
      <NativeRouter>
        <PanelHeader actionType={actionType} />

        <BackButton>
          <Route exact path="/" component={StartView} />

          <Route exact path="/create" component={() => (
            <CreateView setActionType={setActionType}/>
          )} />

          <Route exact path="/create/form" component={() => (
            <FormView actionType={actionType} />
          )} />

          {actionType === 'regular' && (
            <Route exact path="/create/additional" component={FormAdditionalView} />
          )}

          <Route exact path="/snippet" component={SnippetPreview} />
          <Route exact path="/post" component={PostView} />
        </BackButton>
      </NativeRouter>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    marginLeft: 8,
    marginRight: 8,
  },
});

export default App;
