import React, {Fragment} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

export default function App() {
  let renderContent = () => (
    <View style={styles.bottom_sheet}>
      <Text>Swipe down to close</Text>
    </View>
  );

  let sheetRef = React.useRef(null);

  return (
    <Fragment>
      <View style={styles.container}>
        <Button
          title="Open Bottom Sheet"
          onPress={() => sheetRef.current.snapTo(0)}
        />
      </View>

      <BottomSheet
        ref={sheetRef}
        snapPoints={[450, 300, 0]}
        borderRadius={10}
        renderContent={renderContent}
      />
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'papayawhip',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom_sheet: {
    backgroundColor: 'white',
    padding: 16,
    height: 450,
  },
});
