import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';
import {ActivityIndicator, Avatar} from 'react-native-paper';

const CameraComponent = () => {
  const [photo, setPhoto] = React.useState(null);

  const {hasPermission, requestPermission} = useCameraPermission();
  const camera = useRef(null);

  const takePhoto = async () => {
    if (camera.current) {
      const photo = await camera.current.takePhoto({
        qualityPrioritization: 'quality',
      });
      setPhoto(photo);
      console.log(photo);
    }
  };

  const pickImage = async () => {
    const photo = await Camera.openPhotoGallery();
    setPhoto(photo);
  };

  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
  });

  const device = useCameraDevice('back');

  if (device == null) return <ActivityIndicator />;
  return (
    <View style={{flex: 1}}>
      <Camera
        ref={camera}
        device={device}
        isActive={true}
        style={StyleSheet.absoluteFill}
        photo={true}
      />

      <View style={styles.container}>
        <TouchableOpacity style={styles.snapButton} onPress={pickImage}>
          <Avatar.Icon
            size={60}
            icon="image"
            style={{backgroundColor: 'black'}}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.snapButton} onPress={takePhoto}>
          <Avatar.Icon
            size={60}
            icon="camera"
            style={{backgroundColor: 'black'}}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.snapButton}>
          <Avatar.Icon
            size={60}
            icon="camera-flip"
            style={{backgroundColor: 'black'}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  snapButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'black',
  },

  container: {
    top: 860,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
  },
});

export default CameraComponent;
