import axios, { GenericAbortSignal, AxiosResponse } from "axios";

type Endpoint = {
  path: string;
  get: boolean;
  post: boolean;
  put: boolean;
  delete: boolean;
};
type Methods = {
  get: boolean;
  post: boolean;
  put: boolean;
  delete: boolean;
};
export type SupportedApis = Record<string, Endpoint[]>;
type SupportedVersionMethods = Record<string, Methods>;

export const ccapi = async (
  ipAddress: string,
  signal: GenericAbortSignal | undefined = undefined
) => {
  return axios({
    method: "get",
    url: `http://${ipAddress}/ccapi`,
    signal: signal,
  });
};

export const Camera = (ipAddress: string, supportedApis: SupportedApis) => {
  return {
    topUrlForDev: buildFunction(ipAddress, "/topUrlForDev", supportedApis),
    deviceInformation: buildFunction(
      ipAddress,
      "/deviceinformation",
      supportedApis
    ),
    storage: buildFunction(ipAddress, "/devicestatus/storage", supportedApis),
    currentStorage: buildFunction(
      ipAddress,
      "/devicestatus/currentstorage",
      supportedApis
    ),
    currentDirectory: buildFunction(
      ipAddress,
      "/devicestatus/currentdirectory",
      supportedApis
    ),
    battery: buildFunction(ipAddress, "/devicestatus/battery", supportedApis),
    batteryList: buildFunction(
      ipAddress,
      "/devicestatus/batterylist",
      supportedApis
    ),
    lens: buildFunction(ipAddress, "/devicestatus/lens", supportedApis),
    temperature: buildFunction(
      ipAddress,
      "/devicestatus/temperature",
      supportedApis
    ),
    copyright: buildFunction(
      ipAddress,
      "/functions/registeredname/copyright",
      supportedApis
    ),
    author: buildFunction(
      ipAddress,
      "/functions/registeredname/author",
      supportedApis
    ),
    ownerName: buildFunction(
      ipAddress,
      "/functions/registeredname/ownername",
      supportedApis
    ),
    nickName: buildFunction(
      ipAddress,
      "/functions/registeredname/nickname",
      supportedApis
    ),
    dateTime: buildFunction(ipAddress, "/functions/datetime", supportedApis),
    cardFormat: buildFunction(
      ipAddress,
      "/functions/cardformat",
      supportedApis
    ),
    beep: buildFunction(ipAddress, "/functions/beep", supportedApis),
    displayOff: buildFunction(
      ipAddress,
      "/functions/displayoff",
      supportedApis
    ),
    autoPowerOff: buildFunction(
      ipAddress,
      "/functions/autopoweroff",
      supportedApis
    ),
    sensorCleaning: buildFunction(
      ipAddress,
      "/functions/sensorcleaning",
      supportedApis
    ),
    networkConnection: buildFunction(
      ipAddress,
      "/functions/networkconnection",
      supportedApis
    ),
    networkSetting: buildFunction(
      ipAddress,
      "/functions/networksetting",
      supportedApis
    ),
    currentConnectionSetting: buildFunction(
      ipAddress,
      "/functions/networksetting/currentconnectionsetting",
      supportedApis
    ),
    connectionSetting: buildFunction(
      ipAddress,
      "/functions/networksetting/connectionsetting",
      supportedApis
    ),
    connectionSettingSet: buildFunction(
      ipAddress,
      "/functions/networksetting/connectionsetting",
      supportedApis
    ),
    commSetting: buildFunction(
      ipAddress,
      "/functions/networksetting/commsetting",
      supportedApis
    ),
    commSettingNw: buildFunction(
      ipAddress,
      "/functions/networksetting/commsetting",
      supportedApis
    ),
    functionSetting: buildFunction(
      ipAddress,
      "/functions/networksetting/functionsetting",
      supportedApis
    ),
    functionSettingMode: buildFunction(
      ipAddress,
      "/functions/networksetting/functionsetting",
      supportedApis
    ),
    wifiConnection: buildFunction(
      ipAddress,
      "/functions/wificonnection",
      supportedApis
    ),
    wifiSetting: buildFunction(
      ipAddress,
      "/functions/wifisetting",
      supportedApis
    ),
    wifiSettingSet1: buildFunction(
      ipAddress,
      "/functions/wifisetting/set1",
      supportedApis
    ),
    wifiSettingSet2: buildFunction(
      ipAddress,
      "/functions/wifisetting/set2",
      supportedApis
    ),
    wifiSettingSet3: buildFunction(
      ipAddress,
      "/functions/wifisetting/set3",
      supportedApis
    ),
    caCert: buildFunction(ipAddress, "/functions/ssl/cacert", supportedApis),
    commonName: buildFunction(
      ipAddress,
      "/functions/ssl/servercert/commonname",
      supportedApis
    ),
    corsSetting: buildFunction(
      ipAddress,
      "/functions/cors/corssetting",
      supportedApis
    ),
    corsOrigin: buildFunction(
      ipAddress,
      "/functions/cors/origin",
      supportedApis
    ),
    recordFunctionsSeparate: buildFunction(
      ipAddress,
      "/functions/recordfunctions/separate",
      supportedApis
    ),
    recordFunctionsStillImage: buildFunction(
      ipAddress,
      "/functions/recordfunctions/stillimage",
      supportedApis
    ),
    recordFunctionsMovie: buildFunction(
      ipAddress,
      "/functions/recordfunctions/movie",
      supportedApis
    ),
    cardSelectionStillImage: buildFunction(
      ipAddress,
      "/functions/cardselection/stillimage",
      supportedApis
    ),
    cardSelectionMovie: buildFunction(
      ipAddress,
      "/functions/cardselection/movie",
      supportedApis
    ),
    exposureIncrementsAv: buildFunction(
      ipAddress,
      "/customfunction/exposureincrements/av",
      supportedApis
    ),
    exposureIncrementsTv: buildFunction(
      ipAddress,
      "/customfunction/exposureincrements/tv",
      supportedApis
    ),
    exposureIncrementsExposure: buildFunction(
      ipAddress,
      "/customfunction/exposureincrements/exposure",
      supportedApis
    ),
    exposureIncrementsFlashExposure: buildFunction(
      ipAddress,
      "/customfunction/exposureincrements/flashexposure",
      supportedApis
    ),
    isoIncrements: buildFunction(
      ipAddress,
      "/customfunction/isoincrements",
      supportedApis
    ),
    contents: buildFunction(ipAddress, "/contents", supportedApis),
    contentsStorage: buildFunction(ipAddress, "/contents", supportedApis),
    contentsStorageDirectory: buildFunction(
      ipAddress,
      "/contents",
      supportedApis
    ),
    contentsStorageDirectoryFile: buildFunction(
      ipAddress,
      "/contents",
      supportedApis
    ),
    shutterButton: buildFunction(
      ipAddress,
      "/shooting/control/shutterbutton",
      supportedApis
    ),
    shutterButtonManual: buildFunction(
      ipAddress,
      "/shooting/control/shutterbutton/manual",
      supportedApis
    ),
    ignoreShootingModeDialMode: buildFunction(
      ipAddress,
      "/shooting/control/ignoreshootingmodedialmode",
      supportedApis
    ),
    movieMode: buildFunction(
      ipAddress,
      "/shooting/control/moviemode",
      supportedApis
    ),
    recButton: buildFunction(
      ipAddress,
      "/shooting/control/recbutton",
      supportedApis
    ),
    zoom: buildFunction(ipAddress, "/shooting/control/zoom", supportedApis),
    driveFocus: buildFunction(
      ipAddress,
      "/shooting/control/drivefocus",
      supportedApis
    ),
    autoFocus: buildFunction(ipAddress, "/shooting/control/af", supportedApis),
    flickerDetection: buildFunction(
      ipAddress,
      "/shooting/control/flickerdetection",
      supportedApis
    ),
    hfFlickerDetection: buildFunction(
      ipAddress,
      "/shooting/control/hfflickerdetection",
      supportedApis
    ),
    controlHfFlickerTv: buildFunction(
      ipAddress,
      "/shooting/control/hfflickertv",
      supportedApis
    ),
    shootingSettings: buildFunction(
      ipAddress,
      "/shooting/settings",
      supportedApis
    ),
    shootingModeDial: buildFunction(
      ipAddress,
      "/shooting/settings/shootingmodedial",
      supportedApis
    ),
    shootingModeDialMovie: buildFunction(
      ipAddress,
      "/shooting/settings/shootingmodedial/movie",
      supportedApis
    ),
    shootingMode: buildFunction(
      ipAddress,
      "/shooting/settings/shootingmode",
      supportedApis
    ),
    apertureValue: buildFunction(
      ipAddress,
      "/shooting/settings/av",
      supportedApis
    ),
    timeValue: buildFunction(ipAddress, "/shooting/settings/tv", supportedApis),
    iso: buildFunction(ipAddress, "/shooting/settings/iso", supportedApis),
    exposure: buildFunction(
      ipAddress,
      "/shooting/settings/exposure",
      supportedApis
    ),
    whiteBalance: buildFunction(
      ipAddress,
      "/shooting/settings/wb",
      supportedApis
    ),
    colorTemperature: buildFunction(
      ipAddress,
      "/shooting/settings/colortemperature",
      supportedApis
    ),
    autoFocusOperation: buildFunction(
      ipAddress,
      "/shooting/settings/afoperation",
      supportedApis
    ),
    autoFocusMethod: buildFunction(
      ipAddress,
      "/shooting/settings/afmethod",
      supportedApis
    ),
    trackingSetting: buildFunction(
      ipAddress,
      "/shooting/settings/trackingsetting",
      supportedApis
    ),
    shutterMode: buildFunction(
      ipAddress,
      "/shooting/settings/shuttermode",
      supportedApis
    ),
    stillImageQuality: buildFunction(
      ipAddress,
      "/shooting/settings/stillimagequality",
      supportedApis
    ),
    stillImageCompressionLarge: buildFunction(
      ipAddress,
      "/shooting/settings/stillimagecompression/large",
      supportedApis
    ),
    stillImageCompressionMedium: buildFunction(
      ipAddress,
      "/shooting/settings/stillimagecompression/medium",
      supportedApis
    ),
    stillImageCompressionMedium1: buildFunction(
      ipAddress,
      "/shooting/settings/stillimagecompression/medium1",
      supportedApis
    ),
    stillImageCompressionMedium2: buildFunction(
      ipAddress,
      "/shooting/settings/stillimagecompression/medium2",
      supportedApis
    ),
    stillImageCompressionSmall: buildFunction(
      ipAddress,
      "/shooting/settings/stillimagecompression/small",
      supportedApis
    ),
    stillImageCompressionSmall1: buildFunction(
      ipAddress,
      "/shooting/settings/stillimagecompression/small1",
      supportedApis
    ),
    stillImageCompressionSmall2: buildFunction(
      ipAddress,
      "/shooting/settings/stillimagecompression/small2",
      supportedApis
    ),
    hdr: buildFunction(ipAddress, "/shooting/settings/hdr", supportedApis),
    stillImageAspectRatio: buildFunction(
      ipAddress,
      "/shooting/settings/stillimageaspectratio",
      supportedApis
    ),
    flash: buildFunction(ipAddress, "/shooting/settings/flash", supportedApis),
    metering: buildFunction(
      ipAddress,
      "/shooting/settings/metering",
      supportedApis
    ),
    drive: buildFunction(ipAddress, "/shooting/settings/drive", supportedApis),
    shootingSpeed: buildFunction(
      ipAddress,
      "/shooting/settings/drive/customhighspeedcont/shootingspeed",
      supportedApis
    ),
    numberOfShots: buildFunction(
      ipAddress,
      "/shooting/settings/drive/customhighspeedcont/numberofshots",
      supportedApis
    ),
    autoExposureBracketing: buildFunction(
      ipAddress,
      "/shooting/settings/aeb",
      supportedApis
    ),
    whiteBalanceShift: buildFunction(
      ipAddress,
      "/shooting/settings/wbshift",
      supportedApis
    ),
    whiteBalanceBracket: buildFunction(
      ipAddress,
      "/shooting/settings/wbbracket",
      supportedApis
    ),
    colorSpace: buildFunction(
      ipAddress,
      "/shooting/settings/colorspace",
      supportedApis
    ),
    pictureStyle: buildFunction(
      ipAddress,
      "/shooting/settings/picturestyle",
      supportedApis
    ),
    pictureStyleAuto: buildFunction(
      ipAddress,
      "/shooting/settings/picturestyle/auto",
      supportedApis
    ),
    pictureStyleStandard: buildFunction(
      ipAddress,
      "/shooting/settings/picturestyle/standard",
      supportedApis
    ),
    pictureStylePortrait: buildFunction(
      ipAddress,
      "/shooting/settings/picturestyle/portrait",
      supportedApis
    ),
    pictureStyleLandscape: buildFunction(
      ipAddress,
      "/shooting/settings/picturestyle/landscape",
      supportedApis
    ),
    pictureStyleFineDetail: buildFunction(
      ipAddress,
      "/shooting/settings/picturestyle/finedetail",
      supportedApis
    ),
    pictureStyleNeutral: buildFunction(
      ipAddress,
      "/shooting/settings/picturestyle/neutral",
      supportedApis
    ),
    pictureStyleFaithful: buildFunction(
      ipAddress,
      "/shooting/settings/picturestyle/faithful",
      supportedApis
    ),
    pictureStyleMonochrome: buildFunction(
      ipAddress,
      "/shooting/settings/picturestyle/monochrome",
      supportedApis
    ),
    pictureStyleUserDef1: buildFunction(
      ipAddress,
      "/shooting/settings/picturestyle/userdef1",
      supportedApis
    ),
    pictureStyleUserDef2: buildFunction(
      ipAddress,
      "/shooting/settings/picturestyle/userdef2",
      supportedApis
    ),
    pictureStyleUserDef3: buildFunction(
      ipAddress,
      "/shooting/settings/picturestyle/userdef3",
      supportedApis
    ),
    basePictureStyleUserDef1: buildFunction(
      ipAddress,
      "/shooting/settings/picturestyle/userdef1/basepicturestyle",
      supportedApis
    ),
    basePictureStyleUserDef2: buildFunction(
      ipAddress,
      "/shooting/settings/picturestyle/userdef2/basepicturestyle",
      supportedApis
    ),
    basePictureStyleUserDef3: buildFunction(
      ipAddress,
      "/shooting/settings/picturestyle/userdef3/basepicturestyle",
      supportedApis
    ),
    antiFlickerShoot: buildFunction(
      ipAddress,
      "/shooting/settings/antiflickershoot",
      supportedApis
    ),
    hfAntiFlickerShoot: buildFunction(
      ipAddress,
      "/shooting/settings/hfantiflickershoot",
      supportedApis
    ),
    settingsHfFlickerTv: buildFunction(
      ipAddress,
      "/shooting/settings/hfflickertv",
      supportedApis
    ),
    focusBracketing: buildFunction(
      ipAddress,
      "/shooting/settings/focusbracketing",
      supportedApis
    ),
    focusBracketingNumberOfShots: buildFunction(
      ipAddress,
      "/shooting/settings/focusbracketing/numberofshots",
      supportedApis
    ),
    focusBracketingFocusIncrement: buildFunction(
      ipAddress,
      "/shooting/settings/focusbracketing/focusincrement",
      supportedApis
    ),
    focusBracketingExposureSmoothing: buildFunction(
      ipAddress,
      "/shooting/settings/focusbracketing/exposuresmoothing",
      supportedApis
    ),
    movieQuality: buildFunction(
      ipAddress,
      "/shooting/settings/moviequality",
      supportedApis
    ),
    highFramerate: buildFunction(
      ipAddress,
      "/shooting/settings/highframerate",
      supportedApis
    ),
    movieCropping: buildFunction(
      ipAddress,
      "/shooting/settings/moviecropping",
      supportedApis
    ),
    movieFormat: buildFunction(
      ipAddress,
      "/shooting/settings/movieformat",
      supportedApis
    ),
    soundRecording: buildFunction(
      ipAddress,
      "/shooting/settings/soundrecording",
      supportedApis
    ),
    soundRecordingLevel: buildFunction(
      ipAddress,
      "/shooting/settings/soundrecording/level",
      supportedApis
    ),
    soundRecordingWindFilter: buildFunction(
      ipAddress,
      "/shooting/settings/soundrecording/windfilter",
      supportedApis
    ),
    soundRecordingAttenuator: buildFunction(
      ipAddress,
      "/shooting/settings/soundrecording/attenuator",
      supportedApis
    ),
    recordable: buildFunction(
      ipAddress,
      "/shooting/information/recordable",
      supportedApis
    ),
    liveView: buildFunction(ipAddress, "/shooting/liveview", supportedApis),
    liveViewFlip: buildFunction(
      ipAddress,
      "/shooting/liveview/flip",
      supportedApis
    ),
    liveViewFlipDetail: buildFunction(
      ipAddress,
      "/shooting/liveview/flipdetail",
      supportedApis
    ),
    liveViewScroll: buildFunction(
      ipAddress,
      "/shooting/liveview/scroll",
      supportedApis
    ),
    liveViewScrollDetail: buildFunction(
      ipAddress,
      "/shooting/liveview/scrolldetail",
      supportedApis
    ),
    liveViewMultipart: buildFunction(
      ipAddress,
      "/shooting/liveview/multipart",
      supportedApis
    ),
    liveViewRtpSessionDescription: buildFunction(
      ipAddress,
      "/shooting/liveview/rtpsessiondesc",
      supportedApis
    ),
    liveViewRtp: buildFunction(
      ipAddress,
      "/shooting/liveview/rtp",
      supportedApis
    ),
    liveViewAngleInfo: buildFunction(
      ipAddress,
      "/shooting/liveview/angleinformation",
      supportedApis
    ),
    liveViewAutoFocusFramePosition: buildFunction(
      ipAddress,
      "/shooting/liveview/afframeposition",
      supportedApis
    ),
    liveViewClickWhiteBalance: buildFunction(
      ipAddress,
      "/shooting/liveview/clickwb",
      supportedApis
    ),
    opticalFinderAutoFocusAreaSelectionMode: buildFunction(
      ipAddress,
      "/shooting/opticalfinder/afareaselectionmode",
      supportedApis
    ),
    opticalFinderAutoFocusAreaSelection: buildFunction(
      ipAddress,
      "/shooting/opticalfinder/afareaselection",
      supportedApis
    ),
    opticalFinderAutoFocusFrameInfo: buildFunction(
      ipAddress,
      "/shooting/opticalfinder/afframeinformation",
      supportedApis
    ),
    opticalFinderAutoFocusAreaInfo: buildFunction(
      ipAddress,
      "/shooting/opticalfinder/afareainformation",
      supportedApis
    ),
    polling: buildFunction(ipAddress, "/event/polling", supportedApis),
    monitoring: buildFunction(ipAddress, "/event/monitoring", supportedApis),
  };
};

type GetOptions = {
  paths?: string[] | [];
  params?: Object | null;
  signal?: GenericAbortSignal | undefined;
};
type PostOptions = {
  paths?: string[] | [];
  params?: Object | null;
  data?: Object | {};
  signal?: GenericAbortSignal | undefined;
};
type PutOptions = {
  paths?: string[] | [];
  params?: Object | null;
  data?: Object | {};
  signal?: GenericAbortSignal | undefined;
};
type DeleteOptions = {
  paths?: string[] | [];
  params?: Object | null;
  signal?: GenericAbortSignal | undefined;
};

const buildFunction = (
  ipAddress: string,
  path: string,
  supportedApis: SupportedApis
) => {
  const buildUrl = (
    ipAddress: string,
    version: string,
    path: string,
    paths: string[] | []
  ) => {
    let result = `http://${ipAddress}/ccapi/${version}${path}`;
    if (paths) {
      for (let p of paths) {
        result = result.concat(`/${p}`);
      }
    }
    return result;
  };
  const versions = Object.keys(supportedApis);
  if (versions.length === 0) throw new Error("supportedApis is empty");
  let supportedVersions: string[] = [];
  let supportedVersionMethods: SupportedVersionMethods = {};
  for (let version of versions) {
    const endpoints = supportedApis[version];
    for (let endpoint of endpoints) {
      if (endpoint.path.split(version).pop() === path) {
        supportedVersions.push(version);
        supportedVersionMethods[version] = {
          get: endpoint.get,
          post: endpoint.post,
          put: endpoint.put,
          delete: endpoint.delete,
        };
        break;
      }
    }
  }
  supportedVersions.sort();
  if (supportedVersions.length === 0) {
    return {
      supported: () => false,
      versions: () => [],
      versionMethods: () => {},
      path: () => "",
      get: (
        version: string,
        { paths = [], params = null, signal = undefined }: GetOptions = {}
      ) => Promise.reject(new Error("get not supported")),
      post: (
        version: string,
        {
          paths = [],
          params = null,
          data = {},
          signal = undefined,
        }: PostOptions = {}
      ) => Promise.reject(new Error("post not supported")),
      put: (
        version: string,
        {
          paths = [],
          params = null,
          data = {},
          signal = undefined,
        }: PutOptions = {}
      ) => Promise.reject(new Error("put not supported")),
      delete: (
        version: string,
        { paths = [], params = null, signal = undefined }: DeleteOptions = {}
      ) => Promise.reject(new Error("delete not supported")),
    };
  }

  return {
    supported: (): boolean => true,
    versions: (): string[] => supportedVersions,
    versionMethods: () => supportedVersionMethods,
    path: () => path,
    get: (
      version: string,
      { paths = [], params = null, signal = undefined }: GetOptions = {}
    ) => {
      const url = buildUrl(ipAddress, version, path, paths);
      return axios({
        method: "get",
        url: url,
        params: params,
        signal: signal,
      });
    },
    post: (
      version: string,
      {
        paths = [],
        params = null,
        data = {},
        signal = undefined,
      }: PostOptions = {}
    ) => {
      const url = buildUrl(ipAddress, version, path, paths);
      return axios({
        method: "post",
        url: url,
        params: params,
        data: data,
        signal: signal,
      });
    },
    put: (
      version: string,
      {
        paths = [],
        params = null,
        data = {},
        signal = undefined,
      }: PutOptions = {}
    ) => {
      const url = buildUrl(ipAddress, version, path, paths);
      return axios({
        method: "put",
        url: url,
        params: params,
        data: data,
        signal: signal,
      });
    },
    delete: (
      version: string,
      { paths = [], params = null, signal = undefined }: DeleteOptions = {}
    ) => {
      const url = buildUrl(ipAddress, version, path, paths);
      return axios({
        method: "delete",
        url: url,
        params: params,
        signal: signal,
      });
    },
  };
};
