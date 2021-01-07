import * as React from 'react';
import {Text, View, Button} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';

export default function BottomSheetAnimated() {
  const renderContent = () => (
    <View
      style={{
        backgroundColor: 'white',
        padding: 16,
        height: '100%',
      }}>
      <Text>Nguyen Vinh Hung</Text>
    </View>
  );

  const sheetRef = React.useRef(null);

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: 'papayawhip',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Button
          title="Open Bottom Sheet"
          onPress={() => sheetRef.current.snapTo(0)}
        />
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={['80%', '50%', 0]}
        borderRadius={10}
        renderContent={renderContent}
      />
    </>
  );
}
