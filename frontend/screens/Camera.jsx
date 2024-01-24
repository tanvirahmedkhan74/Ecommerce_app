import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';
import {ActivityIndicator, Avatar} from 'react-native-paper';
import {launchImageLibrary} from 'react-native-image-picker';
import Toast from 'react-native-toast-message';

const CameraComponent = ({route, navigation}) => {
  const {hasPermission, requestPermission} = useCameraPermission();
  const [photo, setPhoto] = React.useState(null);
  const [device, setDevice] = useState(useCameraDevice('back'));

  const camera = useRef(null);

  const takePhoto = async () => {
    if (camera.current) {
      const photo = await camera.current.takePhoto({
        qualityPrioritization: 'quality',
      });
      setPhoto(`file://${photo.path}`);
    }
  };

  const pickImage = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      allowsEditing: true,
    });

    if (result.assets && result.assets[0]) {
      setPhoto(result.assets[0].uri);
    }
  };

  const flipCamera = () => {
    console.log(device);
    const currentDevice = device.id;
    const newDevice = currentDevice === 'back' ? 'front' : 'back';

    try {
      const newCamera = useCameraDevice(newDevice);
      setDevice(newCamera);
    } catch (err) {
      console.log(err);
    }
  };

  const discardPhoto = () => {
    setPhoto(null);
  };

  const savePhototoGallery = () => {
    Toast.show(
      {
        type: 'success',
        text1: 'Photo Saved',
      },
      2000,
    );
    if (route.params?.newProduct) {
      navigation.navigate('NewProduct', {photo: photo});
    } else if (route.params?.updateProduct) {
      navigation.navigate('ProductImages', {photo: photo});
    } else if (route.params?.updateProfile) {
      navigation.navigate('Profile', {photo: photo});
    } else navigation.navigate('SignUp', {photo: photo});

    setPhoto(null);
  };

  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
  });

  if (device == null) return <ActivityIndicator />;
  return (
    <View style={{flex: 1}}>
      {photo === null ? (
        <>
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
            <TouchableOpacity style={styles.snapButton} onPress={flipCamera}>
              <Avatar.Icon
                size={60}
                icon="camera-flip"
                style={{backgroundColor: 'black'}}
              />
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={{flex: 1}}>
          <Image source={{uri: photo}} style={StyleSheet.absoluteFill} />
          <View style={styles.container_2}>
            <TouchableOpacity onPress={discardPhoto}>
              <Avatar.Icon
                size={60}
                icon="cancel"
                style={{
                  backgroundColor: 'black',
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={savePhototoGallery}>
              <Avatar.Icon
                size={60}
                icon="check"
                style={{
                  backgroundColor: 'red',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
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

  container_2: {
    top: 30,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
  },
});

export default CameraComponent;
