import React, { Component } from 'react';
import {
    AppRegistry,
} from 'react-native';

import SectionListDemo from "./src/01_componts/SectionListDemo";
import FlatListDemo from "./src/01_componts/FlatListDemo";
import ScrollViewDemo from "./src/01_componts/ScrollViewDemo";
import TextinputDemo from "./src/01_componts/TextinputDemo";
import ImageDemo from "./src/01_componts/ImageDemo";
import ViewDemo from "./src/01_componts/ViewDemo";
import TextDemo from "./src/01_componts/TextDemo";
import CompontsTest from "./src/01_componts/CompontsTest";

import FlexDirectionDemo from "./src/02_flex/FlexDirectionDemo";
import FlexWrapDemo from "./src/02_flex/FlexWrapDemo";
import JustifyContentDemo from "./src/02_flex/JustifyContentDemo";
import AlignItemsDemo from "./src/02_flex/AlignItemsDemo";
import AlignSelfDemo from "./src/02_flex/AlignSelfDemo";
import FlexDemo from "./src/02_flex/FlexDemo";
import PositionDemo from "./src/02_flex/PositionDemo";

import GridDemo from "./src/02_flex/GridDemo";
import ComicMainDemo from "./src/02_flex/ComicMainDemo";

import PropsDemo from "./src/03_props_state_lifecycle/PropsDemo";
import StateDemo from "./src/03_props_state_lifecycle/StateDemo";
import LifecycleDemo from "./src/03_props_state_lifecycle/LifecycleDemo";
import LifecycleDemo2 from "./src/03_props_state_lifecycle/LifecycleDemo2";

import FetchNetDataDemo from "./src/04_network/FetchNetDataDemo";
import XMLHttpRequestDemo from "./src/04_network/XMLHttpRequestDemo";

import StackMainScreen from "./src/05_navigation/stacknavigation/StackMainScreen";
import TabMainScreen from "./src/05_navigation/tabnavigation/TabMainScreen";
import DrawerMainScreen from "./src/05_navigation/drawernavigation/DrawerMainScreen";
import MyStackNavigation from "./src/05_navigation/nestingnavigators/MyStackNavigation";
import MyDrawerNavigation from "./src/05_navigation/nestingnavigators2/MyDrawerNavigation";

import SwiperDemo from "./src/06_swiper/SwiperDemo";
import SwiperDemo2 from "./src/06_swiper/SwiperDemo2";

import RefreshControlDemo from "./src/07_refreshcontrol/RefreshControlDemo";
import RefreshControlFlatListDemo from "./src/07_refreshcontrol/RefreshControlFlatListDemo";
import LoadMoreDemo from "./src/07_refreshcontrol/LoadMoreDemo";
import ActivityIndicatorDemo from "./src/07_refreshcontrol/ActivityIndicatorDemo";

import WebViewSimpleDemo from "./src/08_webview/WebViewSimpleDemo";
import WebViewLocalDemo from "./src/08_webview/WebViewLocalDemo";
import WebViewCommunication from "./src/08_webview/WebViewCommunication";

import PickerDemo from "./src/09_picker/PickerDemo";
import SwitchDemo from "./src/09_picker/SwitchDemo";
import SliderDemo from "./src/09_picker/SliderDemo";

import AsyncStorageDemo from "./src/10_storage/AsyncStorageDemo";
import SQLiteDemo from "./src/10_storage/SQLiteDemo";
import RealmDemo from "./src/10_storage/RealmDemo";

import DimensionsDemo from "./src/11_api/DimensionsDemo";
import PixelRatioDemo from "./src/11_api/PixelRatioDemo";
import AppStateDemo from "./src/11_api/AppStateDemo";
import NetInfoDemo from "./src/11_api/NetInfoDemo";
import GeolocationDemo from "./src/11_api/GeolocationDemo";
import KeyboardDemo from "./src/11_api/KeyboardDemo";
import ToastAndroidDemo from "./src/11_api/ToastAndroidDemo";
import BackHandlerDemo from "./src/11_api/BackHandlerDemo";
import AlertDemo from "./src/11_api/AlertDemo";
import AlertIOSDemo from "./src/11_api/AlertIOSDemo";
import AlertModalDemo from "./src/11_api/AlertModalDemo";

import ToastModuleAndroidDemo from "./src/12_nativeapi/ToastModuleAndroidDemo";
import HelloWorldIOSDemo from "./src/12_nativeapi/HelloWorldIOSDemo";

import FrameAnimationDemo from "./src/13_animation/FrameAnimationDemo";
import LayoutAnimationDemo from "./src/13_animation/LayoutAnimationDemo";



export default class ExerciseProject extends Component {
    render() {
        return (
            <LayoutAnimationDemo />
        );
    }
}
AppRegistry.registerComponent('ExerciseProject', () => ExerciseProject);
