var jacdac = (() => {
  // jacdac-spec/dist/specconstants.ts
  var SystemCmdPack;
  ((SystemCmdPack2) => {
    SystemCmdPack2.CommandNotImplemented = "u16 u16";
  })(SystemCmdPack || (SystemCmdPack = {}));
  var SystemRegPack;
  ((SystemRegPack2) => {
    SystemRegPack2.Intensity = "u32";
    SystemRegPack2.Value = "i32";
    SystemRegPack2.MinValue = "i32";
    SystemRegPack2.MaxValue = "i32";
    SystemRegPack2.MaxPower = "u16";
    SystemRegPack2.StreamingSamples = "u8";
    SystemRegPack2.StreamingInterval = "u32";
    SystemRegPack2.Reading = "i32";
    SystemRegPack2.ReadingRange = "u32";
    SystemRegPack2.SupportedRanges = "r: u32";
    SystemRegPack2.MinReading = "i32";
    SystemRegPack2.MaxReading = "i32";
    SystemRegPack2.ReadingError = "u32";
    SystemRegPack2.ReadingResolution = "u32";
    SystemRegPack2.InactiveThreshold = "i32";
    SystemRegPack2.ActiveThreshold = "i32";
    SystemRegPack2.StreamingPreferredInterval = "u32";
    SystemRegPack2.Variant = "u32";
    SystemRegPack2.ClientVariant = "s";
    SystemRegPack2.StatusCode = "u16 u16";
    SystemRegPack2.InstanceName = "s";
  })(SystemRegPack || (SystemRegPack = {}));
  var SystemEventPack;
  ((SystemEventPack2) => {
    SystemEventPack2.StatusCodeChanged = "u16 u16";
  })(SystemEventPack || (SystemEventPack = {}));
  var BaseCmdPack;
  ((BaseCmdPack2) => {
    BaseCmdPack2.CommandNotImplemented = "u16 u16";
  })(BaseCmdPack || (BaseCmdPack = {}));
  var BaseRegPack;
  ((BaseRegPack2) => {
    BaseRegPack2.InstanceName = "s";
    BaseRegPack2.StatusCode = "u16 u16";
    BaseRegPack2.ClientVariant = "s";
  })(BaseRegPack || (BaseRegPack = {}));
  var BaseEventPack;
  ((BaseEventPack2) => {
    BaseEventPack2.StatusCodeChanged = "u16 u16";
  })(BaseEventPack || (BaseEventPack = {}));
  var SensorRegPack;
  ((SensorRegPack2) => {
    SensorRegPack2.StreamingSamples = "u8";
    SensorRegPack2.StreamingInterval = "u32";
    SensorRegPack2.StreamingPreferredInterval = "u32";
  })(SensorRegPack || (SensorRegPack = {}));
  var AccelerometerRegPack;
  ((AccelerometerRegPack2) => {
    AccelerometerRegPack2.Forces = "i12.20 i12.20 i12.20";
    AccelerometerRegPack2.ForcesError = "u12.20";
    AccelerometerRegPack2.MaxForce = "u12.20";
    AccelerometerRegPack2.MaxForcesSupported = "r: u12.20";
  })(AccelerometerRegPack || (AccelerometerRegPack = {}));
  var AcidityRegPack;
  ((AcidityRegPack2) => {
    AcidityRegPack2.Acidity = "u4.12";
    AcidityRegPack2.AcidityError = "u4.12";
    AcidityRegPack2.MinAcidity = "u4.12";
    AcidityRegPack2.MaxAcidity = "u4.12";
  })(AcidityRegPack || (AcidityRegPack = {}));
  var AirPressureRegPack;
  ((AirPressureRegPack2) => {
    AirPressureRegPack2.Pressure = "u22.10";
    AirPressureRegPack2.PressureError = "u22.10";
    AirPressureRegPack2.MinPressure = "u22.10";
    AirPressureRegPack2.MaxPressure = "u22.10";
  })(AirPressureRegPack || (AirPressureRegPack = {}));
  var AirQualityIndexRegPack;
  ((AirQualityIndexRegPack2) => {
    AirQualityIndexRegPack2.AqiIndex = "u16.16";
    AirQualityIndexRegPack2.AqiIndexError = "u16.16";
    AirQualityIndexRegPack2.MinAqiIndex = "u16.16";
    AirQualityIndexRegPack2.MaxAqiIndex = "u16.16";
  })(AirQualityIndexRegPack || (AirQualityIndexRegPack = {}));
  var ArcadeGamepadRegPack;
  ((ArcadeGamepadRegPack2) => {
    ArcadeGamepadRegPack2.Buttons = "r: u8 u0.8";
    ArcadeGamepadRegPack2.AvailableButtons = "r: u8";
  })(ArcadeGamepadRegPack || (ArcadeGamepadRegPack = {}));
  var ArcadeGamepadEventPack;
  ((ArcadeGamepadEventPack2) => {
    ArcadeGamepadEventPack2.Down = "u8";
    ArcadeGamepadEventPack2.Up = "u8";
  })(ArcadeGamepadEventPack || (ArcadeGamepadEventPack = {}));
  var ArcadeSoundCmdPack;
  ((ArcadeSoundCmdPack2) => {
    ArcadeSoundCmdPack2.Play = "b";
  })(ArcadeSoundCmdPack || (ArcadeSoundCmdPack = {}));
  var ArcadeSoundRegPack;
  ((ArcadeSoundRegPack2) => {
    ArcadeSoundRegPack2.SampleRate = "u22.10";
    ArcadeSoundRegPack2.BufferSize = "u32";
    ArcadeSoundRegPack2.BufferPending = "u32";
  })(ArcadeSoundRegPack || (ArcadeSoundRegPack = {}));
  var BarcodeReaderRegPack;
  ((BarcodeReaderRegPack2) => {
    BarcodeReaderRegPack2.Enabled = "u8";
    BarcodeReaderRegPack2.Formats = "r: u8";
  })(BarcodeReaderRegPack || (BarcodeReaderRegPack = {}));
  var BarcodeReaderEventPack;
  ((BarcodeReaderEventPack2) => {
    BarcodeReaderEventPack2.Detect = "u8 s";
  })(BarcodeReaderEventPack || (BarcodeReaderEventPack = {}));
  var BitRadioRegPack;
  ((BitRadioRegPack2) => {
    BitRadioRegPack2.Enabled = "u8";
    BitRadioRegPack2.Group = "u8";
    BitRadioRegPack2.TransmissionPower = "u8";
    BitRadioRegPack2.FrequencyBand = "u8";
  })(BitRadioRegPack || (BitRadioRegPack = {}));
  var BitRadioCmdPack;
  ((BitRadioCmdPack2) => {
    BitRadioCmdPack2.SendString = "s";
    BitRadioCmdPack2.SendNumber = "f64";
    BitRadioCmdPack2.SendValue = "f64 s";
    BitRadioCmdPack2.SendBuffer = "b";
    BitRadioCmdPack2.StringReceived = "u32 u32 i8 b[1] s";
    BitRadioCmdPack2.NumberReceived = "u32 u32 i8 b[3] f64 s";
    BitRadioCmdPack2.BufferReceived = "u32 u32 i8 b[1] b";
  })(BitRadioCmdPack || (BitRadioCmdPack = {}));
  var BootloaderCmdPack;
  ((BootloaderCmdPack2) => {
    BootloaderCmdPack2.InfoReport = "u32 u32 u32 u32";
    BootloaderCmdPack2.SetSession = "u32";
    BootloaderCmdPack2.SetSessionReport = "u32";
    BootloaderCmdPack2.PageData = "u32 u16 u8 u8 u32 u32 u32 u32 u32 b[208]";
    BootloaderCmdPack2.PageDataReport = "u32 u32 u32";
  })(BootloaderCmdPack || (BootloaderCmdPack = {}));
  var BrailleDisplayRegPack;
  ((BrailleDisplayRegPack2) => {
    BrailleDisplayRegPack2.Enabled = "u8";
    BrailleDisplayRegPack2.Patterns = "s";
    BrailleDisplayRegPack2.Length = "u8";
  })(BrailleDisplayRegPack || (BrailleDisplayRegPack = {}));
  var BridgeRegPack;
  ((BridgeRegPack2) => {
    BridgeRegPack2.Enabled = "u8";
  })(BridgeRegPack || (BridgeRegPack = {}));
  var ButtonRegPack;
  ((ButtonRegPack2) => {
    ButtonRegPack2.Pressure = "u0.16";
    ButtonRegPack2.Analog = "u8";
    ButtonRegPack2.Pressed = "u8";
  })(ButtonRegPack || (ButtonRegPack = {}));
  var ButtonEventPack;
  ((ButtonEventPack2) => {
    ButtonEventPack2.Up = "u32";
    ButtonEventPack2.Hold = "u32";
  })(ButtonEventPack || (ButtonEventPack = {}));
  var BuzzerRegPack;
  ((BuzzerRegPack2) => {
    BuzzerRegPack2.Volume = "u0.8";
  })(BuzzerRegPack || (BuzzerRegPack = {}));
  var BuzzerCmdPack;
  ((BuzzerCmdPack2) => {
    BuzzerCmdPack2.PlayTone = "u16 u16 u16";
    BuzzerCmdPack2.PlayNote = "u16 u0.16 u16";
  })(BuzzerCmdPack || (BuzzerCmdPack = {}));
  var CapacitiveButtonRegPack;
  ((CapacitiveButtonRegPack2) => {
    CapacitiveButtonRegPack2.Threshold = "u0.16";
  })(CapacitiveButtonRegPack || (CapacitiveButtonRegPack = {}));
  var CharacterScreenRegPack;
  ((CharacterScreenRegPack2) => {
    CharacterScreenRegPack2.Message = "s";
    CharacterScreenRegPack2.Brightness = "u0.16";
    CharacterScreenRegPack2.Variant = "u8";
    CharacterScreenRegPack2.TextDirection = "u8";
    CharacterScreenRegPack2.Rows = "u8";
    CharacterScreenRegPack2.Columns = "u8";
  })(CharacterScreenRegPack || (CharacterScreenRegPack = {}));
  var CloudAdapterCmdPack;
  ((CloudAdapterCmdPack2) => {
    CloudAdapterCmdPack2.UploadJson = "z s";
    CloudAdapterCmdPack2.UploadBinary = "z b";
  })(CloudAdapterCmdPack || (CloudAdapterCmdPack = {}));
  var CloudAdapterRegPack;
  ((CloudAdapterRegPack2) => {
    CloudAdapterRegPack2.Connected = "u8";
    CloudAdapterRegPack2.ConnectionName = "s";
  })(CloudAdapterRegPack || (CloudAdapterRegPack = {}));
  var CloudAdapterEventPack;
  ((CloudAdapterEventPack2) => {
    CloudAdapterEventPack2.OnJson = "z s";
    CloudAdapterEventPack2.OnBinary = "z b";
  })(CloudAdapterEventPack || (CloudAdapterEventPack = {}));
  var CloudConfigurationRegPack;
  ((CloudConfigurationRegPack2) => {
    CloudConfigurationRegPack2.ServerName = "s";
    CloudConfigurationRegPack2.CloudDeviceId = "s";
    CloudConfigurationRegPack2.CloudType = "s";
    CloudConfigurationRegPack2.ConnectionStatus = "u16";
    CloudConfigurationRegPack2.PushPeriod = "u32";
    CloudConfigurationRegPack2.PushWatchdogPeriod = "u32";
  })(CloudConfigurationRegPack || (CloudConfigurationRegPack = {}));
  var CloudConfigurationCmdPack;
  ((CloudConfigurationCmdPack2) => {
    CloudConfigurationCmdPack2.SetConnectionString = "s";
  })(CloudConfigurationCmdPack || (CloudConfigurationCmdPack = {}));
  var CloudConfigurationEventPack;
  ((CloudConfigurationEventPack2) => {
    CloudConfigurationEventPack2.ConnectionStatusChange = "u16";
  })(CloudConfigurationEventPack || (CloudConfigurationEventPack = {}));
  var CodalMessageBusCmdPack;
  ((CodalMessageBusCmdPack2) => {
    CodalMessageBusCmdPack2.Send = "u16 u16";
  })(CodalMessageBusCmdPack || (CodalMessageBusCmdPack = {}));
  var CodalMessageBusEventPack;
  ((CodalMessageBusEventPack2) => {
    CodalMessageBusEventPack2.Message = "u16 u16";
  })(CodalMessageBusEventPack || (CodalMessageBusEventPack = {}));
  var ColorRegPack;
  ((ColorRegPack2) => {
    ColorRegPack2.Color = "u0.16 u0.16 u0.16";
  })(ColorRegPack || (ColorRegPack = {}));
  var CompassRegPack;
  ((CompassRegPack2) => {
    CompassRegPack2.Heading = "u16.16";
    CompassRegPack2.Enabled = "u8";
    CompassRegPack2.HeadingError = "u16.16";
  })(CompassRegPack || (CompassRegPack = {}));
  var ControlCmdPack;
  ((ControlCmdPack2) => {
    ControlCmdPack2.ServicesReport = "u16 u8 u8 r: u32";
    ControlCmdPack2.FloodPing = "u32 u32 u8";
    ControlCmdPack2.FloodPingReport = "u32 b";
    ControlCmdPack2.SetStatusLight = "u8 u8 u8 u8";
    ControlCmdPack2.ReliableCommands = "u32";
    ControlCmdPack2.ReliableCommandsReport = "b[12]";
    ControlCmdPack2.Standby = "u32";
  })(ControlCmdPack || (ControlCmdPack = {}));
  var ControlPipePack;
  ((ControlPipePack2) => {
    ControlPipePack2.WrappedCommand = "u8 u8 u16 b";
  })(ControlPipePack || (ControlPipePack = {}));
  var ControlRegPack;
  ((ControlRegPack2) => {
    ControlRegPack2.ResetIn = "u32";
    ControlRegPack2.DeviceDescription = "s";
    ControlRegPack2.ProductIdentifier = "u32";
    ControlRegPack2.BootloaderProductIdentifier = "u32";
    ControlRegPack2.FirmwareVersion = "s";
    ControlRegPack2.McuTemperature = "i16";
    ControlRegPack2.Uptime = "u64";
  })(ControlRegPack || (ControlRegPack = {}));
  var DcCurrentMeasurementRegPack;
  ((DcCurrentMeasurementRegPack2) => {
    DcCurrentMeasurementRegPack2.MeasurementName = "s";
    DcCurrentMeasurementRegPack2.Measurement = "f64";
    DcCurrentMeasurementRegPack2.MeasurementError = "f64";
    DcCurrentMeasurementRegPack2.MinMeasurement = "f64";
    DcCurrentMeasurementRegPack2.MaxMeasurement = "f64";
  })(DcCurrentMeasurementRegPack || (DcCurrentMeasurementRegPack = {}));
  var DcVoltageMeasurementRegPack;
  ((DcVoltageMeasurementRegPack2) => {
    DcVoltageMeasurementRegPack2.MeasurementType = "u8";
    DcVoltageMeasurementRegPack2.MeasurementName = "s";
    DcVoltageMeasurementRegPack2.Measurement = "f64";
    DcVoltageMeasurementRegPack2.MeasurementError = "f64";
    DcVoltageMeasurementRegPack2.MinMeasurement = "f64";
    DcVoltageMeasurementRegPack2.MaxMeasurement = "f64";
  })(DcVoltageMeasurementRegPack || (DcVoltageMeasurementRegPack = {}));
  var DevsDbgCmdPack;
  ((DevsDbgCmdPack2) => {
    DevsDbgCmdPack2.ReadFibers = "b[12]";
    DevsDbgCmdPack2.ReadStack = "b[12] u32";
    DevsDbgCmdPack2.ReadIndexedValues = "b[12] u32 u8 u8 u16 u16";
    DevsDbgCmdPack2.ReadNamedValues = "b[12] u32 u8";
    DevsDbgCmdPack2.ReadValue = "u32 u8";
    DevsDbgCmdPack2.ReadValueReport = "u32 u32 u16 u8";
    DevsDbgCmdPack2.ReadBytes = "b[12] u32 u8 u8 u16 u16";
    DevsDbgCmdPack2.SetBreakpoints = "r: u32";
    DevsDbgCmdPack2.ClearBreakpoints = "r: u32";
    DevsDbgCmdPack2.Step = "u32 u16 u16 r: u32";
  })(DevsDbgCmdPack || (DevsDbgCmdPack = {}));
  var DevsDbgPipePack;
  ((DevsDbgPipePack2) => {
    DevsDbgPipePack2.Fiber = "u32 u16 u16";
    DevsDbgPipePack2.Stackframe = "u32 u32 u32 u16 u16";
    DevsDbgPipePack2.Value = "u32 u32 u16 u8";
    DevsDbgPipePack2.KeyValue = "u32 u32 u32 u16 u8";
    DevsDbgPipePack2.BytesValue = "b";
  })(DevsDbgPipePack || (DevsDbgPipePack = {}));
  var DevsDbgRegPack;
  ((DevsDbgRegPack2) => {
    DevsDbgRegPack2.Enabled = "u8";
    DevsDbgRegPack2.BreakAtUnhandledExn = "u8";
    DevsDbgRegPack2.BreakAtHandledExn = "u8";
    DevsDbgRegPack2.IsSuspended = "u8";
  })(DevsDbgRegPack || (DevsDbgRegPack = {}));
  var DevsDbgEventPack;
  ((DevsDbgEventPack2) => {
    DevsDbgEventPack2.Suspended = "u32 u8";
  })(DevsDbgEventPack || (DevsDbgEventPack = {}));
  var DeviceScriptManagerCmdPack;
  ((DeviceScriptManagerCmdPack2) => {
    DeviceScriptManagerCmdPack2.DeployBytecode = "u32";
    DeviceScriptManagerCmdPack2.DeployBytecodeReport = "u16";
    DeviceScriptManagerCmdPack2.ReadBytecode = "b[12]";
  })(DeviceScriptManagerCmdPack || (DeviceScriptManagerCmdPack = {}));
  var DeviceScriptManagerPipePack;
  ((DeviceScriptManagerPipePack2) => {
    DeviceScriptManagerPipePack2.Bytecode = "b";
  })(DeviceScriptManagerPipePack || (DeviceScriptManagerPipePack = {}));
  var DeviceScriptManagerRegPack;
  ((DeviceScriptManagerRegPack2) => {
    DeviceScriptManagerRegPack2.Running = "u8";
    DeviceScriptManagerRegPack2.Autostart = "u8";
    DeviceScriptManagerRegPack2.ProgramSize = "u32";
    DeviceScriptManagerRegPack2.ProgramHash = "u32";
    DeviceScriptManagerRegPack2.ProgramSha256 = "b[32]";
    DeviceScriptManagerRegPack2.RuntimeVersion = "u16 u8 u8";
    DeviceScriptManagerRegPack2.ProgramName = "s";
    DeviceScriptManagerRegPack2.ProgramVersion = "s";
  })(DeviceScriptManagerRegPack || (DeviceScriptManagerRegPack = {}));
  var DeviceScriptManagerEventPack;
  ((DeviceScriptManagerEventPack2) => {
    DeviceScriptManagerEventPack2.ProgramPanic = "u32 u32";
  })(DeviceScriptManagerEventPack || (DeviceScriptManagerEventPack = {}));
  var DistanceRegPack;
  ((DistanceRegPack2) => {
    DistanceRegPack2.Distance = "u16.16";
    DistanceRegPack2.DistanceError = "u16.16";
    DistanceRegPack2.MinRange = "u16.16";
    DistanceRegPack2.MaxRange = "u16.16";
    DistanceRegPack2.Variant = "u8";
  })(DistanceRegPack || (DistanceRegPack = {}));
  var DmxRegPack;
  ((DmxRegPack2) => {
    DmxRegPack2.Enabled = "u8";
  })(DmxRegPack || (DmxRegPack = {}));
  var DmxCmdPack;
  ((DmxCmdPack2) => {
    DmxCmdPack2.Send = "b";
  })(DmxCmdPack || (DmxCmdPack = {}));
  var DotMatrixRegPack;
  ((DotMatrixRegPack2) => {
    DotMatrixRegPack2.Dots = "b";
    DotMatrixRegPack2.Brightness = "u0.8";
    DotMatrixRegPack2.Rows = "u16";
    DotMatrixRegPack2.Columns = "u16";
    DotMatrixRegPack2.Variant = "u8";
  })(DotMatrixRegPack || (DotMatrixRegPack = {}));
  var DualMotorsRegPack;
  ((DualMotorsRegPack2) => {
    DualMotorsRegPack2.Speed = "i1.15 i1.15";
    DualMotorsRegPack2.Enabled = "u8";
    DualMotorsRegPack2.LoadTorque = "u16.16";
    DualMotorsRegPack2.LoadRotationSpeed = "u16.16";
    DualMotorsRegPack2.Reversible = "u8";
  })(DualMotorsRegPack || (DualMotorsRegPack = {}));
  var ECO2RegPack;
  ((ECO2RegPack2) => {
    ECO2RegPack2.ECO2 = "u22.10";
    ECO2RegPack2.ECO2Error = "u22.10";
    ECO2RegPack2.MinECO2 = "u22.10";
    ECO2RegPack2.MaxECO2 = "u22.10";
    ECO2RegPack2.Variant = "u8";
  })(ECO2RegPack || (ECO2RegPack = {}));
  var FlexRegPack;
  ((FlexRegPack2) => {
    FlexRegPack2.Bending = "i1.15";
    FlexRegPack2.Length = "u16";
  })(FlexRegPack || (FlexRegPack = {}));
  var GamepadRegPack;
  ((GamepadRegPack2) => {
    GamepadRegPack2.Direction = "u32 i1.15 i1.15";
    GamepadRegPack2.Variant = "u8";
    GamepadRegPack2.ButtonsAvailable = "u32";
  })(GamepadRegPack || (GamepadRegPack = {}));
  var GamepadEventPack;
  ((GamepadEventPack2) => {
    GamepadEventPack2.ButtonsChanged = "u32";
  })(GamepadEventPack || (GamepadEventPack = {}));
  var GPIORegPack;
  ((GPIORegPack2) => {
    GPIORegPack2.State = "b";
    GPIORegPack2.NumPins = "u8";
  })(GPIORegPack || (GPIORegPack = {}));
  var GPIOCmdPack;
  ((GPIOCmdPack2) => {
    GPIOCmdPack2.Configure = "r: u8 u8";
    GPIOCmdPack2.PinInfo = "u8";
    GPIOCmdPack2.PinInfoReport = "u8 u8 u16 u8 s";
    GPIOCmdPack2.PinByLabel = "s";
    GPIOCmdPack2.PinByLabelReport = "u8 u8 u16 u8 s";
    GPIOCmdPack2.PinByHwPin = "u8";
    GPIOCmdPack2.PinByHwPinReport = "u8 u8 u16 u8 s";
  })(GPIOCmdPack || (GPIOCmdPack = {}));
  var GyroscopeRegPack;
  ((GyroscopeRegPack2) => {
    GyroscopeRegPack2.RotationRates = "i12.20 i12.20 i12.20";
    GyroscopeRegPack2.RotationRatesError = "u12.20";
    GyroscopeRegPack2.MaxRate = "u12.20";
    GyroscopeRegPack2.MaxRatesSupported = "r: u12.20";
  })(GyroscopeRegPack || (GyroscopeRegPack = {}));
  var HeartRateRegPack;
  ((HeartRateRegPack2) => {
    HeartRateRegPack2.HeartRate = "u16.16";
    HeartRateRegPack2.HeartRateError = "u16.16";
    HeartRateRegPack2.Variant = "u8";
  })(HeartRateRegPack || (HeartRateRegPack = {}));
  var HidJoystickRegPack;
  ((HidJoystickRegPack2) => {
    HidJoystickRegPack2.ButtonCount = "u8";
    HidJoystickRegPack2.ButtonsAnalog = "u32";
    HidJoystickRegPack2.AxisCount = "u8";
  })(HidJoystickRegPack || (HidJoystickRegPack = {}));
  var HidJoystickCmdPack;
  ((HidJoystickCmdPack2) => {
    HidJoystickCmdPack2.SetButtons = "r: u0.8";
    HidJoystickCmdPack2.SetAxis = "r: i1.15";
  })(HidJoystickCmdPack || (HidJoystickCmdPack = {}));
  var HidKeyboardCmdPack;
  ((HidKeyboardCmdPack2) => {
    HidKeyboardCmdPack2.Key = "r: u16 u8 u8";
  })(HidKeyboardCmdPack || (HidKeyboardCmdPack = {}));
  var HidMouseCmdPack;
  ((HidMouseCmdPack2) => {
    HidMouseCmdPack2.SetButton = "u16 u8";
    HidMouseCmdPack2.Move = "i16 i16 u16";
    HidMouseCmdPack2.Wheel = "i16 u16";
  })(HidMouseCmdPack || (HidMouseCmdPack = {}));
  var HumidityRegPack;
  ((HumidityRegPack2) => {
    HumidityRegPack2.Humidity = "u22.10";
    HumidityRegPack2.HumidityError = "u22.10";
    HumidityRegPack2.MinHumidity = "u22.10";
    HumidityRegPack2.MaxHumidity = "u22.10";
  })(HumidityRegPack || (HumidityRegPack = {}));
  var I2CRegPack;
  ((I2CRegPack2) => {
    I2CRegPack2.Ok = "u8";
  })(I2CRegPack || (I2CRegPack = {}));
  var I2CCmdPack;
  ((I2CCmdPack2) => {
    I2CCmdPack2.Transaction = "u8 u8 b";
    I2CCmdPack2.TransactionReport = "u8 b";
  })(I2CCmdPack || (I2CCmdPack = {}));
  var IlluminanceRegPack;
  ((IlluminanceRegPack2) => {
    IlluminanceRegPack2.Illuminance = "u22.10";
    IlluminanceRegPack2.IlluminanceError = "u22.10";
  })(IlluminanceRegPack || (IlluminanceRegPack = {}));
  var IndexedScreenCmdPack;
  ((IndexedScreenCmdPack2) => {
    IndexedScreenCmdPack2.StartUpdate = "u16 u16 u16 u16";
    IndexedScreenCmdPack2.SetPixels = "b";
  })(IndexedScreenCmdPack || (IndexedScreenCmdPack = {}));
  var IndexedScreenRegPack;
  ((IndexedScreenRegPack2) => {
    IndexedScreenRegPack2.Brightness = "u0.8";
    IndexedScreenRegPack2.Palette = "b";
    IndexedScreenRegPack2.BitsPerPixel = "u8";
    IndexedScreenRegPack2.Width = "u16";
    IndexedScreenRegPack2.Height = "u16";
    IndexedScreenRegPack2.WidthMajor = "u8";
    IndexedScreenRegPack2.UpSampling = "u8";
    IndexedScreenRegPack2.Rotation = "u16";
  })(IndexedScreenRegPack || (IndexedScreenRegPack = {}));
  var KeyboardClientEventPack;
  ((KeyboardClientEventPack2) => {
    KeyboardClientEventPack2.Down = "u16";
    KeyboardClientEventPack2.Hold = "u16";
  })(KeyboardClientEventPack || (KeyboardClientEventPack = {}));
  var LedRegPack;
  ((LedRegPack2) => {
    LedRegPack2.Pixels = "b";
    LedRegPack2.Brightness = "u0.8";
    LedRegPack2.ActualBrightness = "u0.8";
    LedRegPack2.NumPixels = "u16";
    LedRegPack2.NumColumns = "u16";
    LedRegPack2.MaxPower = "u16";
    LedRegPack2.LedsPerPixel = "u16";
    LedRegPack2.WaveLength = "u16";
    LedRegPack2.LuminousIntensity = "u16";
    LedRegPack2.Variant = "u8";
  })(LedRegPack || (LedRegPack = {}));
  var LedSingleCmdPack;
  ((LedSingleCmdPack2) => {
    LedSingleCmdPack2.Animate = "u8 u8 u8 u8";
  })(LedSingleCmdPack || (LedSingleCmdPack = {}));
  var LedSingleRegPack;
  ((LedSingleRegPack2) => {
    LedSingleRegPack2.Color = "u8 u8 u8";
    LedSingleRegPack2.MaxPower = "u16";
    LedSingleRegPack2.LedCount = "u16";
    LedSingleRegPack2.WaveLength = "u16";
    LedSingleRegPack2.LuminousIntensity = "u16";
    LedSingleRegPack2.Variant = "u8";
  })(LedSingleRegPack || (LedSingleRegPack = {}));
  var LedStripRegPack;
  ((LedStripRegPack2) => {
    LedStripRegPack2.Brightness = "u0.8";
    LedStripRegPack2.ActualBrightness = "u0.8";
    LedStripRegPack2.LightType = "u8";
    LedStripRegPack2.NumPixels = "u16";
    LedStripRegPack2.NumColumns = "u16";
    LedStripRegPack2.MaxPower = "u16";
    LedStripRegPack2.MaxPixels = "u16";
    LedStripRegPack2.NumRepeats = "u16";
    LedStripRegPack2.Variant = "u8";
  })(LedStripRegPack || (LedStripRegPack = {}));
  var LedStripCmdPack;
  ((LedStripCmdPack2) => {
    LedStripCmdPack2.Run = "b";
  })(LedStripCmdPack || (LedStripCmdPack = {}));
  var LightBulbRegPack;
  ((LightBulbRegPack2) => {
    LightBulbRegPack2.Brightness = "u0.16";
    LightBulbRegPack2.Dimmable = "u8";
  })(LightBulbRegPack || (LightBulbRegPack = {}));
  var LightLevelRegPack;
  ((LightLevelRegPack2) => {
    LightLevelRegPack2.LightLevel = "u0.16";
    LightLevelRegPack2.LightLevelError = "u0.16";
    LightLevelRegPack2.Variant = "u8";
  })(LightLevelRegPack || (LightLevelRegPack = {}));
  var LoggerRegPack;
  ((LoggerRegPack2) => {
    LoggerRegPack2.MinPriority = "u8";
  })(LoggerRegPack || (LoggerRegPack = {}));
  var LoggerCmdPack;
  ((LoggerCmdPack2) => {
    LoggerCmdPack2.Debug = "s";
    LoggerCmdPack2.Log = "s";
    LoggerCmdPack2.Warn = "s";
    LoggerCmdPack2.Error = "s";
  })(LoggerCmdPack || (LoggerCmdPack = {}));
  var MagneticFieldLevelRegPack;
  ((MagneticFieldLevelRegPack2) => {
    MagneticFieldLevelRegPack2.Strength = "i1.15";
    MagneticFieldLevelRegPack2.Detected = "u8";
    MagneticFieldLevelRegPack2.Variant = "u8";
  })(MagneticFieldLevelRegPack || (MagneticFieldLevelRegPack = {}));
  var MagnetometerRegPack;
  ((MagnetometerRegPack2) => {
    MagnetometerRegPack2.Forces = "i32 i32 i32";
    MagnetometerRegPack2.ForcesError = "i32";
  })(MagnetometerRegPack || (MagnetometerRegPack = {}));
  var MatrixKeypadRegPack;
  ((MatrixKeypadRegPack2) => {
    MatrixKeypadRegPack2.Pressed = "r: u8";
    MatrixKeypadRegPack2.Rows = "u8";
    MatrixKeypadRegPack2.Columns = "u8";
    MatrixKeypadRegPack2.Labels = "r: z";
    MatrixKeypadRegPack2.Variant = "u8";
  })(MatrixKeypadRegPack || (MatrixKeypadRegPack = {}));
  var MatrixKeypadEventPack;
  ((MatrixKeypadEventPack2) => {
    MatrixKeypadEventPack2.Down = "u8";
    MatrixKeypadEventPack2.Up = "u8";
    MatrixKeypadEventPack2.Click = "u8";
    MatrixKeypadEventPack2.LongClick = "u8";
  })(MatrixKeypadEventPack || (MatrixKeypadEventPack = {}));
  var MicrophoneCmdPack;
  ((MicrophoneCmdPack2) => {
    MicrophoneCmdPack2.Sample = "b[12] u32";
  })(MicrophoneCmdPack || (MicrophoneCmdPack = {}));
  var MicrophoneRegPack;
  ((MicrophoneRegPack2) => {
    MicrophoneRegPack2.SamplingPeriod = "u32";
  })(MicrophoneRegPack || (MicrophoneRegPack = {}));
  var MidiOutputRegPack;
  ((MidiOutputRegPack2) => {
    MidiOutputRegPack2.Enabled = "u8";
  })(MidiOutputRegPack || (MidiOutputRegPack = {}));
  var MidiOutputCmdPack;
  ((MidiOutputCmdPack2) => {
    MidiOutputCmdPack2.Send = "b";
  })(MidiOutputCmdPack || (MidiOutputCmdPack = {}));
  var ModelRunnerCmdPack;
  ((ModelRunnerCmdPack2) => {
    ModelRunnerCmdPack2.SetModel = "u32";
    ModelRunnerCmdPack2.SetModelReport = "u16";
    ModelRunnerCmdPack2.Predict = "b[12]";
    ModelRunnerCmdPack2.PredictReport = "u16";
  })(ModelRunnerCmdPack || (ModelRunnerCmdPack = {}));
  var ModelRunnerRegPack;
  ((ModelRunnerRegPack2) => {
    ModelRunnerRegPack2.AutoInvokeEvery = "u16";
    ModelRunnerRegPack2.Outputs = "r: f32";
    ModelRunnerRegPack2.InputShape = "r: u16";
    ModelRunnerRegPack2.OutputShape = "r: u16";
    ModelRunnerRegPack2.LastRunTime = "u32";
    ModelRunnerRegPack2.AllocatedArenaSize = "u32";
    ModelRunnerRegPack2.ModelSize = "u32";
    ModelRunnerRegPack2.LastError = "s";
    ModelRunnerRegPack2.Format = "u32";
    ModelRunnerRegPack2.FormatVersion = "u32";
    ModelRunnerRegPack2.Parallel = "u8";
  })(ModelRunnerRegPack || (ModelRunnerRegPack = {}));
  var MotionRegPack;
  ((MotionRegPack2) => {
    MotionRegPack2.Moving = "u8";
    MotionRegPack2.MaxDistance = "u16.16";
    MotionRegPack2.Angle = "u16";
    MotionRegPack2.Variant = "u8";
  })(MotionRegPack || (MotionRegPack = {}));
  var MotorRegPack;
  ((MotorRegPack2) => {
    MotorRegPack2.Speed = "i1.15";
    MotorRegPack2.Enabled = "u8";
    MotorRegPack2.LoadTorque = "u16.16";
    MotorRegPack2.LoadRotationSpeed = "u16.16";
    MotorRegPack2.Reversible = "u8";
  })(MotorRegPack || (MotorRegPack = {}));
  var MultitouchRegPack;
  ((MultitouchRegPack2) => {
    MultitouchRegPack2.Capacity = "r: i16";
  })(MultitouchRegPack || (MultitouchRegPack = {}));
  var MultitouchEventPack;
  ((MultitouchEventPack2) => {
    MultitouchEventPack2.Touch = "u8";
    MultitouchEventPack2.Release = "u8";
    MultitouchEventPack2.Tap = "u8";
    MultitouchEventPack2.LongPress = "u8";
    MultitouchEventPack2.SwipePos = "u16 u8 u8";
    MultitouchEventPack2.SwipeNeg = "u16 u8 u8";
  })(MultitouchEventPack || (MultitouchEventPack = {}));
  var PCControllerCmdPack;
  ((PCControllerCmdPack2) => {
    PCControllerCmdPack2.OpenUrl = "s";
    PCControllerCmdPack2.StartApp = "s";
    PCControllerCmdPack2.SendText = "s";
    PCControllerCmdPack2.RunScript = "s";
  })(PCControllerCmdPack || (PCControllerCmdPack = {}));
  var PCMonitorRegPack;
  ((PCMonitorRegPack2) => {
    PCMonitorRegPack2.CpuUsage = "u8";
    PCMonitorRegPack2.CpuTemperature = "u8";
    PCMonitorRegPack2.RamUsage = "u8";
    PCMonitorRegPack2.GpuInformation = "u8 u8";
    PCMonitorRegPack2.NetworkInformation = "u16 u16";
  })(PCMonitorRegPack || (PCMonitorRegPack = {}));
  var PlanarPositionRegPack;
  ((PlanarPositionRegPack2) => {
    PlanarPositionRegPack2.Position = "i22.10 i22.10";
    PlanarPositionRegPack2.Variant = "u8";
  })(PlanarPositionRegPack || (PlanarPositionRegPack = {}));
  var PotentiometerRegPack;
  ((PotentiometerRegPack2) => {
    PotentiometerRegPack2.Position = "u0.16";
    PotentiometerRegPack2.Variant = "u8";
  })(PotentiometerRegPack || (PotentiometerRegPack = {}));
  var PowerRegPack;
  ((PowerRegPack2) => {
    PowerRegPack2.Allowed = "u8";
    PowerRegPack2.MaxPower = "u16";
    PowerRegPack2.PowerStatus = "u8";
    PowerRegPack2.CurrentDraw = "u16";
    PowerRegPack2.BatteryVoltage = "u16";
    PowerRegPack2.BatteryCharge = "u0.16";
    PowerRegPack2.BatteryCapacity = "u32";
    PowerRegPack2.KeepOnPulseDuration = "u16";
    PowerRegPack2.KeepOnPulsePeriod = "u16";
  })(PowerRegPack || (PowerRegPack = {}));
  var PowerEventPack;
  ((PowerEventPack2) => {
    PowerEventPack2.PowerStatusChanged = "u8";
  })(PowerEventPack || (PowerEventPack = {}));
  var PowerSupplyRegPack;
  ((PowerSupplyRegPack2) => {
    PowerSupplyRegPack2.Enabled = "u8";
    PowerSupplyRegPack2.OutputVoltage = "f64";
    PowerSupplyRegPack2.MinimumVoltage = "f64";
    PowerSupplyRegPack2.MaximumVoltage = "f64";
  })(PowerSupplyRegPack || (PowerSupplyRegPack = {}));
  var PressureButtonRegPack;
  ((PressureButtonRegPack2) => {
    PressureButtonRegPack2.Threshold = "u0.16";
  })(PressureButtonRegPack || (PressureButtonRegPack = {}));
  var ProtoTestRegPack;
  ((ProtoTestRegPack2) => {
    ProtoTestRegPack2.RwBool = "u8";
    ProtoTestRegPack2.RoBool = "u8";
    ProtoTestRegPack2.RwU32 = "u32";
    ProtoTestRegPack2.RoU32 = "u32";
    ProtoTestRegPack2.RwI32 = "i32";
    ProtoTestRegPack2.RoI32 = "i32";
    ProtoTestRegPack2.RwString = "s";
    ProtoTestRegPack2.RoString = "s";
    ProtoTestRegPack2.RwBytes = "b";
    ProtoTestRegPack2.RoBytes = "b";
    ProtoTestRegPack2.RwI8U8U16I32 = "i8 u8 u16 i32";
    ProtoTestRegPack2.RoI8U8U16I32 = "i8 u8 u16 i32";
    ProtoTestRegPack2.RwU8String = "u8 s";
    ProtoTestRegPack2.RoU8String = "u8 s";
  })(ProtoTestRegPack || (ProtoTestRegPack = {}));
  var ProtoTestEventPack;
  ((ProtoTestEventPack2) => {
    ProtoTestEventPack2.EBool = "u8";
    ProtoTestEventPack2.EU32 = "u32";
    ProtoTestEventPack2.EI32 = "i32";
    ProtoTestEventPack2.EString = "s";
    ProtoTestEventPack2.EBytes = "b";
    ProtoTestEventPack2.EI8U8U16I32 = "i8 u8 u16 i32";
    ProtoTestEventPack2.EU8String = "u8 s";
  })(ProtoTestEventPack || (ProtoTestEventPack = {}));
  var ProtoTestCmdPack;
  ((ProtoTestCmdPack2) => {
    ProtoTestCmdPack2.CBool = "u8";
    ProtoTestCmdPack2.CU32 = "u32";
    ProtoTestCmdPack2.CI32 = "i32";
    ProtoTestCmdPack2.CString = "s";
    ProtoTestCmdPack2.CBytes = "b";
    ProtoTestCmdPack2.CI8U8U16I32 = "i8 u8 u16 i32";
    ProtoTestCmdPack2.CU8String = "u8 s";
    ProtoTestCmdPack2.CReportPipe = "b[12]";
  })(ProtoTestCmdPack || (ProtoTestCmdPack = {}));
  var ProtoTestPipePack;
  ((ProtoTestPipePack2) => {
    ProtoTestPipePack2.PBytes = "u8";
  })(ProtoTestPipePack || (ProtoTestPipePack = {}));
  var PulseOximeterRegPack;
  ((PulseOximeterRegPack2) => {
    PulseOximeterRegPack2.Oxygen = "u8.8";
    PulseOximeterRegPack2.OxygenError = "u8.8";
  })(PulseOximeterRegPack || (PulseOximeterRegPack = {}));
  var RainGaugeRegPack;
  ((RainGaugeRegPack2) => {
    RainGaugeRegPack2.Precipitation = "u16.16";
    RainGaugeRegPack2.PrecipitationPrecision = "u16.16";
  })(RainGaugeRegPack || (RainGaugeRegPack = {}));
  var RealTimeClockRegPack;
  ((RealTimeClockRegPack2) => {
    RealTimeClockRegPack2.LocalTime = "u16 u8 u8 u8 u8 u8 u8";
    RealTimeClockRegPack2.Drift = "u16.16";
    RealTimeClockRegPack2.Precision = "u16.16";
    RealTimeClockRegPack2.Variant = "u8";
  })(RealTimeClockRegPack || (RealTimeClockRegPack = {}));
  var RealTimeClockCmdPack;
  ((RealTimeClockCmdPack2) => {
    RealTimeClockCmdPack2.SetTime = "u16 u8 u8 u8 u8 u8 u8";
  })(RealTimeClockCmdPack || (RealTimeClockCmdPack = {}));
  var ReflectedLightRegPack;
  ((ReflectedLightRegPack2) => {
    ReflectedLightRegPack2.Brightness = "u0.16";
    ReflectedLightRegPack2.Variant = "u8";
  })(ReflectedLightRegPack || (ReflectedLightRegPack = {}));
  var RelayRegPack;
  ((RelayRegPack2) => {
    RelayRegPack2.Active = "u8";
    RelayRegPack2.Variant = "u8";
    RelayRegPack2.MaxSwitchingCurrent = "u32";
  })(RelayRegPack || (RelayRegPack = {}));
  var RngRegPack;
  ((RngRegPack2) => {
    RngRegPack2.Random = "b";
    RngRegPack2.Variant = "u8";
  })(RngRegPack || (RngRegPack = {}));
  var RoleManagerRegPack;
  ((RoleManagerRegPack2) => {
    RoleManagerRegPack2.AutoBind = "u8";
    RoleManagerRegPack2.AllRolesAllocated = "u8";
  })(RoleManagerRegPack || (RoleManagerRegPack = {}));
  var RoleManagerCmdPack;
  ((RoleManagerCmdPack2) => {
    RoleManagerCmdPack2.SetRole = "b[8] u8 s";
    RoleManagerCmdPack2.ListRoles = "b[12]";
  })(RoleManagerCmdPack || (RoleManagerCmdPack = {}));
  var RoleManagerPipePack;
  ((RoleManagerPipePack2) => {
    RoleManagerPipePack2.Roles = "b[8] u32 u8 s";
  })(RoleManagerPipePack || (RoleManagerPipePack = {}));
  var RosCmdPack;
  ((RosCmdPack2) => {
    RosCmdPack2.PublishMessage = "z z s";
    RosCmdPack2.SubscribeMessage = "z s";
    RosCmdPack2.Message = "z z s";
  })(RosCmdPack || (RosCmdPack = {}));
  var RotaryEncoderRegPack;
  ((RotaryEncoderRegPack2) => {
    RotaryEncoderRegPack2.Position = "i32";
    RotaryEncoderRegPack2.ClicksPerTurn = "u16";
    RotaryEncoderRegPack2.Clicker = "u8";
  })(RotaryEncoderRegPack || (RotaryEncoderRegPack = {}));
  var RoverRegPack;
  ((RoverRegPack2) => {
    RoverRegPack2.Kinematics = "i16.16 i16.16 i16.16 i16.16 i16.16";
  })(RoverRegPack || (RoverRegPack = {}));
  var SatNavRegPack;
  ((SatNavRegPack2) => {
    SatNavRegPack2.Position = "u64 i9.23 i9.23 u16.16 i26.6 u16.16";
    SatNavRegPack2.Enabled = "u8";
  })(SatNavRegPack || (SatNavRegPack = {}));
  var SensorAggregatorRegPack;
  ((SensorAggregatorRegPack2) => {
    SensorAggregatorRegPack2.Inputs = "u16 u16 u32 r: b[8] u32 u8 u8 u8 i8";
    SensorAggregatorRegPack2.NumSamples = "u32";
    SensorAggregatorRegPack2.SampleSize = "u8";
    SensorAggregatorRegPack2.StreamingSamples = "u32";
    SensorAggregatorRegPack2.CurrentSample = "b";
  })(SensorAggregatorRegPack || (SensorAggregatorRegPack = {}));
  var SerialRegPack;
  ((SerialRegPack2) => {
    SerialRegPack2.Connected = "u8";
    SerialRegPack2.ConnectionName = "s";
    SerialRegPack2.BaudRate = "u32";
    SerialRegPack2.DataBits = "u8";
    SerialRegPack2.StopBits = "u8";
    SerialRegPack2.ParityMode = "u8";
    SerialRegPack2.BufferSize = "u8";
  })(SerialRegPack || (SerialRegPack = {}));
  var SerialCmdPack;
  ((SerialCmdPack2) => {
    SerialCmdPack2.Send = "b";
    SerialCmdPack2.Received = "b";
  })(SerialCmdPack || (SerialCmdPack = {}));
  var ServoRegPack;
  ((ServoRegPack2) => {
    ServoRegPack2.Angle = "i16.16";
    ServoRegPack2.Enabled = "u8";
    ServoRegPack2.Offset = "i16.16";
    ServoRegPack2.MinAngle = "i16.16";
    ServoRegPack2.MinPulse = "u16";
    ServoRegPack2.MaxAngle = "i16.16";
    ServoRegPack2.MaxPulse = "u16";
    ServoRegPack2.StallTorque = "u16.16";
    ServoRegPack2.ResponseSpeed = "u16.16";
    ServoRegPack2.ActualAngle = "i16.16";
  })(ServoRegPack || (ServoRegPack = {}));
  var SettingsCmdPack;
  ((SettingsCmdPack2) => {
    SettingsCmdPack2.Get = "s";
    SettingsCmdPack2.GetReport = "z b";
    SettingsCmdPack2.Set = "z b";
    SettingsCmdPack2.Delete = "s";
    SettingsCmdPack2.ListKeys = "b[12]";
    SettingsCmdPack2.List = "b[12]";
  })(SettingsCmdPack || (SettingsCmdPack = {}));
  var SettingsPipePack;
  ((SettingsPipePack2) => {
    SettingsPipePack2.ListedKey = "s";
    SettingsPipePack2.ListedEntry = "z b";
  })(SettingsPipePack || (SettingsPipePack = {}));
  var SevenSegmentDisplayRegPack;
  ((SevenSegmentDisplayRegPack2) => {
    SevenSegmentDisplayRegPack2.Digits = "b";
    SevenSegmentDisplayRegPack2.Brightness = "u0.16";
    SevenSegmentDisplayRegPack2.DoubleDots = "u8";
    SevenSegmentDisplayRegPack2.DigitCount = "u8";
    SevenSegmentDisplayRegPack2.DecimalPoint = "u8";
  })(SevenSegmentDisplayRegPack || (SevenSegmentDisplayRegPack = {}));
  var SevenSegmentDisplayCmdPack;
  ((SevenSegmentDisplayCmdPack2) => {
    SevenSegmentDisplayCmdPack2.SetNumber = "f64";
  })(SevenSegmentDisplayCmdPack || (SevenSegmentDisplayCmdPack = {}));
  var SoilMoistureRegPack;
  ((SoilMoistureRegPack2) => {
    SoilMoistureRegPack2.Moisture = "u0.16";
    SoilMoistureRegPack2.MoistureError = "u0.16";
    SoilMoistureRegPack2.Variant = "u8";
  })(SoilMoistureRegPack || (SoilMoistureRegPack = {}));
  var SolenoidRegPack;
  ((SolenoidRegPack2) => {
    SolenoidRegPack2.Pulled = "u8";
    SolenoidRegPack2.Variant = "u8";
  })(SolenoidRegPack || (SolenoidRegPack = {}));
  var SoundLevelRegPack;
  ((SoundLevelRegPack2) => {
    SoundLevelRegPack2.SoundLevel = "u0.16";
    SoundLevelRegPack2.Enabled = "u8";
    SoundLevelRegPack2.LoudThreshold = "u0.16";
    SoundLevelRegPack2.QuietThreshold = "u0.16";
  })(SoundLevelRegPack || (SoundLevelRegPack = {}));
  var SoundPlayerRegPack;
  ((SoundPlayerRegPack2) => {
    SoundPlayerRegPack2.Volume = "u0.16";
  })(SoundPlayerRegPack || (SoundPlayerRegPack = {}));
  var SoundPlayerCmdPack;
  ((SoundPlayerCmdPack2) => {
    SoundPlayerCmdPack2.Play = "s";
    SoundPlayerCmdPack2.ListSounds = "b[12]";
  })(SoundPlayerCmdPack || (SoundPlayerCmdPack = {}));
  var SoundPlayerPipePack;
  ((SoundPlayerPipePack2) => {
    SoundPlayerPipePack2.ListSoundsPipe = "u32 s";
  })(SoundPlayerPipePack || (SoundPlayerPipePack = {}));
  var SoundRecorderWithPlaybackCmdPack;
  ((SoundRecorderWithPlaybackCmdPack2) => {
    SoundRecorderWithPlaybackCmdPack2.Record = "u16";
  })(SoundRecorderWithPlaybackCmdPack || (SoundRecorderWithPlaybackCmdPack = {}));
  var SoundRecorderWithPlaybackRegPack;
  ((SoundRecorderWithPlaybackRegPack2) => {
    SoundRecorderWithPlaybackRegPack2.Status = "u8";
    SoundRecorderWithPlaybackRegPack2.Time = "u16";
    SoundRecorderWithPlaybackRegPack2.Volume = "u0.8";
  })(SoundRecorderWithPlaybackRegPack || (SoundRecorderWithPlaybackRegPack = {}));
  var SoundSpectrumRegPack;
  ((SoundSpectrumRegPack2) => {
    SoundSpectrumRegPack2.FrequencyBins = "b";
    SoundSpectrumRegPack2.Enabled = "u8";
    SoundSpectrumRegPack2.FftPow2Size = "u8";
    SoundSpectrumRegPack2.MinDecibels = "i16";
    SoundSpectrumRegPack2.MaxDecibels = "i16";
    SoundSpectrumRegPack2.SmoothingTimeConstant = "u0.8";
  })(SoundSpectrumRegPack || (SoundSpectrumRegPack = {}));
  var SpeechSynthesisRegPack;
  ((SpeechSynthesisRegPack2) => {
    SpeechSynthesisRegPack2.Enabled = "u8";
    SpeechSynthesisRegPack2.Lang = "s";
    SpeechSynthesisRegPack2.Volume = "u0.8";
    SpeechSynthesisRegPack2.Pitch = "u16.16";
    SpeechSynthesisRegPack2.Rate = "u16.16";
  })(SpeechSynthesisRegPack || (SpeechSynthesisRegPack = {}));
  var SpeechSynthesisCmdPack;
  ((SpeechSynthesisCmdPack2) => {
    SpeechSynthesisCmdPack2.Speak = "s";
  })(SpeechSynthesisCmdPack || (SpeechSynthesisCmdPack = {}));
  var SwitchRegPack;
  ((SwitchRegPack2) => {
    SwitchRegPack2.Active = "u8";
    SwitchRegPack2.Variant = "u8";
  })(SwitchRegPack || (SwitchRegPack = {}));
  var TcpCmdPack;
  ((TcpCmdPack2) => {
    TcpCmdPack2.Open = "b[12]";
    TcpCmdPack2.OpenReport = "u16";
  })(TcpCmdPack || (TcpCmdPack = {}));
  var TcpPipeCmdPack;
  ((TcpPipeCmdPack2) => {
    TcpPipeCmdPack2.OpenSsl = "u16 s";
    TcpPipeCmdPack2.Error = "i32";
  })(TcpPipeCmdPack || (TcpPipeCmdPack = {}));
  var TcpPipePack;
  ((TcpPipePack2) => {
    TcpPipePack2.Outdata = "b";
    TcpPipePack2.Indata = "b";
  })(TcpPipePack || (TcpPipePack = {}));
  var TemperatureRegPack;
  ((TemperatureRegPack2) => {
    TemperatureRegPack2.Temperature = "i22.10";
    TemperatureRegPack2.MinTemperature = "i22.10";
    TemperatureRegPack2.MaxTemperature = "i22.10";
    TemperatureRegPack2.TemperatureError = "u22.10";
    TemperatureRegPack2.Variant = "u8";
  })(TemperatureRegPack || (TemperatureRegPack = {}));
  var TimeseriesAggregatorCmdPack;
  ((TimeseriesAggregatorCmdPack2) => {
    TimeseriesAggregatorCmdPack2.Update = "f64 s";
    TimeseriesAggregatorCmdPack2.SetWindow = "u32 s";
    TimeseriesAggregatorCmdPack2.SetUpload = "u8 s";
    TimeseriesAggregatorCmdPack2.Stored = "u32 b[4] f64 f64 f64 u32 u32 s";
  })(TimeseriesAggregatorCmdPack || (TimeseriesAggregatorCmdPack = {}));
  var TimeseriesAggregatorRegPack;
  ((TimeseriesAggregatorRegPack2) => {
    TimeseriesAggregatorRegPack2.Now = "u32";
    TimeseriesAggregatorRegPack2.FastStart = "u8";
    TimeseriesAggregatorRegPack2.DefaultWindow = "u32";
    TimeseriesAggregatorRegPack2.DefaultUpload = "u8";
    TimeseriesAggregatorRegPack2.UploadUnlabelled = "u8";
    TimeseriesAggregatorRegPack2.SensorWatchdogPeriod = "u32";
  })(TimeseriesAggregatorRegPack || (TimeseriesAggregatorRegPack = {}));
  var TrafficLightRegPack;
  ((TrafficLightRegPack2) => {
    TrafficLightRegPack2.Red = "u8";
    TrafficLightRegPack2.Yellow = "u8";
    TrafficLightRegPack2.Green = "u8";
  })(TrafficLightRegPack || (TrafficLightRegPack = {}));
  var TvocRegPack;
  ((TvocRegPack2) => {
    TvocRegPack2.TVOC = "u22.10";
    TvocRegPack2.TVOCError = "u22.10";
    TvocRegPack2.MinTVOC = "u22.10";
    TvocRegPack2.MaxTVOC = "u22.10";
  })(TvocRegPack || (TvocRegPack = {}));
  var UvIndexRegPack;
  ((UvIndexRegPack2) => {
    UvIndexRegPack2.UvIndex = "u16.16";
    UvIndexRegPack2.UvIndexError = "u16.16";
    UvIndexRegPack2.Variant = "u8";
  })(UvIndexRegPack || (UvIndexRegPack = {}));
  var VerifiedTelemetryRegPack;
  ((VerifiedTelemetryRegPack2) => {
    VerifiedTelemetryRegPack2.TelemetryStatus = "u8";
    VerifiedTelemetryRegPack2.TelemetryStatusInterval = "u32";
    VerifiedTelemetryRegPack2.FingerprintType = "u8";
    VerifiedTelemetryRegPack2.FingerprintTemplate = "u16 b";
  })(VerifiedTelemetryRegPack || (VerifiedTelemetryRegPack = {}));
  var VerifiedTelemetryEventPack;
  ((VerifiedTelemetryEventPack2) => {
    VerifiedTelemetryEventPack2.TelemetryStatusChange = "u8";
  })(VerifiedTelemetryEventPack || (VerifiedTelemetryEventPack = {}));
  var VibrationMotorCmdPack;
  ((VibrationMotorCmdPack2) => {
    VibrationMotorCmdPack2.Vibrate = "r: u8 u0.8";
  })(VibrationMotorCmdPack || (VibrationMotorCmdPack = {}));
  var VibrationMotorRegPack;
  ((VibrationMotorRegPack2) => {
    VibrationMotorRegPack2.MaxVibrations = "u8";
  })(VibrationMotorRegPack || (VibrationMotorRegPack = {}));
  var WaterLevelRegPack;
  ((WaterLevelRegPack2) => {
    WaterLevelRegPack2.Level = "u0.16";
    WaterLevelRegPack2.LevelError = "u0.16";
    WaterLevelRegPack2.Variant = "u8";
  })(WaterLevelRegPack || (WaterLevelRegPack = {}));
  var WeightScaleRegPack;
  ((WeightScaleRegPack2) => {
    WeightScaleRegPack2.Weight = "u16.16";
    WeightScaleRegPack2.WeightError = "u16.16";
    WeightScaleRegPack2.ZeroOffset = "u16.16";
    WeightScaleRegPack2.Gain = "u16.16";
    WeightScaleRegPack2.MaxWeight = "u16.16";
    WeightScaleRegPack2.MinWeight = "u16.16";
    WeightScaleRegPack2.WeightResolution = "u16.16";
    WeightScaleRegPack2.Variant = "u8";
  })(WeightScaleRegPack || (WeightScaleRegPack = {}));
  var WeightScaleCmdPack;
  ((WeightScaleCmdPack2) => {
    WeightScaleCmdPack2.CalibrateGain = "u22.10";
  })(WeightScaleCmdPack || (WeightScaleCmdPack = {}));
  var WifiCmdPack;
  ((WifiCmdPack2) => {
    WifiCmdPack2.LastScanResults = "b[12]";
    WifiCmdPack2.AddNetwork = "z z";
    WifiCmdPack2.ForgetNetwork = "s";
    WifiCmdPack2.SetNetworkPriority = "i16 s";
    WifiCmdPack2.ListKnownNetworks = "b[12]";
  })(WifiCmdPack || (WifiCmdPack = {}));
  var WifiPipePack;
  ((WifiPipePack2) => {
    WifiPipePack2.Results = "u32 u32 i8 u8 b[6] s[33]";
    WifiPipePack2.NetworkResults = "i16 i16 s";
  })(WifiPipePack || (WifiPipePack = {}));
  var WifiRegPack;
  ((WifiRegPack2) => {
    WifiRegPack2.Rssi = "i8";
    WifiRegPack2.Enabled = "u8";
    WifiRegPack2.IpAddress = "b[16]";
    WifiRegPack2.Eui48 = "b[6]";
    WifiRegPack2.Ssid = "s[32]";
  })(WifiRegPack || (WifiRegPack = {}));
  var WifiEventPack;
  ((WifiEventPack2) => {
    WifiEventPack2.ScanComplete = "u16 u16";
    WifiEventPack2.ConnectionFailed = "s";
  })(WifiEventPack || (WifiEventPack = {}));
  var WindDirectionRegPack;
  ((WindDirectionRegPack2) => {
    WindDirectionRegPack2.WindDirection = "u16";
    WindDirectionRegPack2.WindDirectionError = "u16";
  })(WindDirectionRegPack || (WindDirectionRegPack = {}));
  var WindSpeedRegPack;
  ((WindSpeedRegPack2) => {
    WindSpeedRegPack2.WindSpeed = "u16.16";
    WindSpeedRegPack2.WindSpeedError = "u16.16";
    WindSpeedRegPack2.MaxWindSpeed = "u16.16";
  })(WindSpeedRegPack || (WindSpeedRegPack = {}));
  var WsskCmdPack;
  ((WsskCmdPack2) => {
    WsskCmdPack2.Error = "s";
    WsskCmdPack2.SetStreaming = "u16";
    WsskCmdPack2.PingDevice = "b";
    WsskCmdPack2.PingDeviceReport = "b";
    WsskCmdPack2.PingCloud = "b";
    WsskCmdPack2.PingCloudReport = "b";
    WsskCmdPack2.GetHashReport = "b[32]";
    WsskCmdPack2.DeployStart = "u32";
    WsskCmdPack2.DeployWrite = "b";
    WsskCmdPack2.C2d = "u8 z b";
    WsskCmdPack2.D2c = "u8 z b";
    WsskCmdPack2.JacdacPacket = "b";
    WsskCmdPack2.JacdacPacketReport = "b";
    WsskCmdPack2.Dmesg = "b";
    WsskCmdPack2.ExceptionReport = "b";
  })(WsskCmdPack || (WsskCmdPack = {}));

  // src/jdom/constants.ts
  var HF2_TIMEOUT = 1e3;
  var ERROR_TRANSPORT_DEVICE_LOCKED = "transport/device-locked";
  var JACDAC_ERROR = "JacdacError";
  var ERROR_TIMEOUT = "timeout";
  var ERROR_MICROBIT_V1 = "microbit/v1-not-supported";
  var ERROR_MICROBIT_UNKNOWN = "microbit/unknown-hardware-revision";
  var ERROR_MICROBIT_JACDAC_MISSING = "microbit/jacdac-missing";
  var ERROR_MICROBIT_INVALID_MEMORY = "microbit/invalid-memory";
  var ERROR_TRANSPORT_HF2_NOT_SUPPORTED = "transport/hf2-not-supported";

  // src/jdom/error.ts
  var JDError = class extends Error {
    constructor(message, options) {
      super(message);
      this.name = JACDAC_ERROR;
      this.code = options?.code;
      this.cancel = !!options?.cancel;
    }
  };
  function throwError(msg, options) {
    const e = new JDError(msg, options);
    throw e;
  }
  function isCancelError(e) {
    const res = e?.name === JACDAC_ERROR ? e?.cancel : false;
    return res;
  }
  function isTimeoutError(e) {
    return isCodeError(e, ERROR_TIMEOUT);
  }
  function isCodeError(e, code) {
    return errorCode(e) === code;
  }
  function errorCode(e) {
    const code = e?.name === JACDAC_ERROR ? e?.code : void 0;
    if (code)
      return code;
    const deviceLocked = e.name == "NetworkError" && /unable to claim interface/i.test(e.message);
    if (deviceLocked)
      return ERROR_TRANSPORT_DEVICE_LOCKED;
    return void 0;
  }

  // src/jdom/flags.ts
  var Flags = class {
  };
  /**
   * Enables additional logging and diagnostics
   */
  Flags.diagnostics = false;
  /**
   * Trace who and what generates packets
   */
  Flags.trace = false;
  /**
   * Enables/disabled WebUSB
   */
  Flags.webUSB = true;
  /**
   * Enables/disabled WebSerial
   */
  Flags.webSerial = true;
  /**
   * Enables/disables WebBLE
   */
  Flags.webBluetooth = false;
  /**
   * Enables developer mode when connecting devices
   */
  Flags.developerMode = false;

  // src/jdom/utils.ts
  function delay(millis, value) {
    return new Promise((resolve) => setTimeout(() => resolve(value), millis));
  }
  function memcpy(trg, trgOff, src, srcOff, len) {
    if (srcOff === void 0)
      srcOff = 0;
    if (len === void 0)
      len = src.length - srcOff;
    for (let i = 0; i < len; ++i)
      trg[trgOff + i] = src[srcOff + i];
  }
  function uint8ArrayToString(input) {
    const len = input.length;
    let res = "";
    for (let i = 0; i < len; ++i)
      res += String.fromCharCode(input[i]);
    return res;
  }
  function fromUTF8(binstr) {
    if (!binstr)
      return "";
    let escaped = "";
    for (let i = 0; i < binstr.length; ++i) {
      const k = binstr.charCodeAt(i) & 255;
      if (k == 37 || k > 127) {
        escaped += "%" + k.toString(16);
      } else {
        escaped += binstr.charAt(i);
      }
    }
    return decodeURIComponent(escaped);
  }
  var PromiseBuffer = class {
    constructor() {
      this.waiting = [];
      this.available = [];
    }
    drain() {
      for (const f of this.waiting) {
        f(new Error("Promise Buffer Reset"));
      }
      this.waiting = [];
      this.available = [];
    }
    pushError(v) {
      this.push(v);
    }
    push(v) {
      const f = this.waiting.shift();
      if (f)
        f(v);
      else
        this.available.push(v);
    }
    shiftAsync(timeout = 0) {
      if (this.available.length > 0) {
        const v = this.available.shift();
        if (v instanceof Error)
          return Promise.reject(v);
        else
          return Promise.resolve(v);
      } else
        return new Promise((resolve, reject) => {
          const f = (v) => {
            if (v instanceof Error)
              reject(v);
            else
              resolve(v);
          };
          this.waiting.push(f);
          if (timeout > 0) {
            delay(timeout).then(() => {
              const idx = this.waiting.indexOf(f);
              if (idx >= 0) {
                this.waiting.splice(idx, 1);
                reject(
                  new JDError(`Timeout (${timeout}ms)`, {
                    code: ERROR_TIMEOUT
                  })
                );
              }
            });
          }
        });
    }
  };
  var PromiseQueue = class {
    constructor() {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.promises = {};
    }
    enqueue(id, f) {
      return new Promise((resolve, reject) => {
        let arr = this.promises[id];
        if (!arr) {
          arr = this.promises[id] = [];
        }
        const cleanup = () => {
          arr.shift();
          if (arr.length == 0)
            delete this.promises[id];
          else
            arr[0]();
        };
        arr.push(
          () => f().then(
            (v) => {
              cleanup();
              resolve(v);
            },
            (err) => {
              cleanup();
              reject(err);
            }
          )
        );
        if (arr.length == 1)
          arr[0]();
      });
    }
  };
  function fromHex(hex) {
    const r = new Uint8Array(hex.length >> 1);
    for (let i = 0; i < hex.length; i += 2)
      r[i >> 1] = parseInt(hex.slice(i, i + 2), 16);
    return r;
  }
  function write32(buf, pos, v) {
    buf[pos + 0] = v >> 0 & 255;
    buf[pos + 1] = v >> 8 & 255;
    buf[pos + 2] = v >> 16 & 255;
    buf[pos + 3] = v >> 24 & 255;
  }
  function write16(buf, pos, v) {
    buf[pos + 0] = v >> 0 & 255;
    buf[pos + 1] = v >> 8 & 255;
  }
  function read32(buf, pos) {
    return (buf[pos] | buf[pos + 1] << 8 | buf[pos + 2] << 16 | buf[pos + 3] << 24) >>> 0;
  }
  function read16(buf, pos) {
    return buf[pos] | buf[pos + 1] << 8;
  }
  function encodeU32LE(words) {
    const r = new Uint8Array(words.length * 4);
    for (let i = 0; i < words.length; ++i)
      write32(r, i * 4, words[i]);
    return r;
  }
  function bufferToString(buf) {
    return fromUTF8(uint8ArrayToString(buf));
  }
  function bufferConcat(a, b) {
    const r = new Uint8Array(a.length + b.length);
    r.set(a, 0);
    r.set(b, a.length);
    return r;
  }
  function assert(cond, msg = "Assertion failed", debugData) {
    if (!cond) {
      if (debugData)
        console.debug(`assertion filed ${msg}`, debugData);
      if (Flags.diagnostics)
        debugger;
      throw new Error(msg);
    }
  }

  // src/jdom/transport/hf2.ts
  var HF2_DEVICE_MAJOR = 42;
  var HF2_CMD_BININFO = 1;
  var HF2_MODE_BOOTLOADER = 1;
  var HF2_MODE_USERSPACE = 2;
  var HF2_CMD_INFO = 2;
  var HF2_CMD_RESET_INTO_APP = 3;
  var HF2_FLAG_SERIAL_OUT = 128;
  var HF2_FLAG_SERIAL_ERR = 192;
  var HF2_FLAG_CMDPKT_LAST = 64;
  var HF2_FLAG_CMDPKT_BODY = 0;
  var HF2_FLAG_MASK = 192;
  var HF2_STATUS_OK = 0;
  var HF2_STATUS_INVALID_CMD = 1;
  var HF2_STATUS_EXEC_ERR = 2;
  var HF2_STATUS_EVENT = 128;
  var HF2_EV_MASK = 8388608;
  var HF2_CMD_JDS_CONFIG = 32;
  var HF2_CMD_JDS_SEND = 33;
  var HF2_EV_JDS_PACKET = 8388640;
  var HF2Proto = class {
    constructor(io) {
      this.io = io;
      this.eventHandlers = {};
      this.msgs = new PromiseBuffer();
      this.cmdSeq = Math.random() * 65535 | 0;
      this.lock = new PromiseQueue();
      let frames = [];
      io.onData = (buf) => {
        const tp = buf[0] & HF2_FLAG_MASK;
        const len = buf[0] & 63;
        const frame = new Uint8Array(len);
        memcpy(frame, 0, buf, 1, len);
        if (tp & HF2_FLAG_SERIAL_OUT) {
          this.onSerial(frame, tp == HF2_FLAG_SERIAL_ERR);
          return;
        }
        frames.push(frame);
        if (tp == HF2_FLAG_CMDPKT_BODY) {
          return;
        } else {
          assert(tp == HF2_FLAG_CMDPKT_LAST);
          let total = 0;
          for (const f of frames)
            total += f.length;
          const r = new Uint8Array(total);
          let ptr = 0;
          for (const f of frames) {
            memcpy(r, ptr, f);
            ptr += f.length;
          }
          frames = [];
          if (r[2] & HF2_STATUS_EVENT) {
            this.handleEvent(r);
          } else {
            this.msgs.push(r);
          }
        }
      };
    }
    error(m) {
      return this.io?.error(m);
    }
    talkAsync(cmd, data) {
      if (!this.io)
        throwError("hf2: rogue instance");
      let len = 8;
      if (data)
        len += data.length;
      const pkt = new Uint8Array(len);
      const seq = ++this.cmdSeq & 65535;
      write32(pkt, 0, cmd);
      write16(pkt, 4, seq);
      write16(pkt, 6, 0);
      if (data)
        memcpy(pkt, 8, data, 0, data.length);
      let numSkipped = 0;
      const handleReturnAsync = () => this.msgs.shiftAsync(HF2_TIMEOUT).then((res) => {
        if (read16(res, 0) != seq) {
          if (numSkipped < 3) {
            numSkipped++;
            this.io.log(
              `message out of sync, (${seq} vs ${read16(
                res,
                0
              )}); will re-try`
            );
            return handleReturnAsync();
          }
          this.error("out of sync");
        }
        let info = "";
        if (res[3])
          info = "; info=" + res[3];
        switch (res[2]) {
          case HF2_STATUS_OK:
            return res.slice(4);
          case HF2_STATUS_INVALID_CMD:
            this.error("invalid command" + info);
            break;
          case HF2_STATUS_EXEC_ERR:
            this.error("execution error" + info);
            break;
          default:
            this.error("error " + res[2] + info);
            break;
        }
        return null;
      }).catch((e) => {
        console.debug(`hf2 error: ${e.message}; cmd=${cmd}`);
        if (this.io) {
          if (!isTimeoutError(e))
            this.error(e);
        }
        return null;
      });
      return this.enqueueTalk(async () => {
        if (!this.io)
          return null;
        return await this.sendMsgAsync(pkt).then(handleReturnAsync);
      });
    }
    async enqueueTalk(talk) {
      try {
        if (!this.io)
          return void 0;
        return this.lock.enqueue("talk", talk);
      } catch (e) {
        if (!this.io)
          return;
        if (isCancelError(e))
          return;
        throw e;
      }
    }
    sendMsgAsync(buf, serial = 0) {
      const frame = new Uint8Array(64);
      const loop = (pos) => {
        let len = buf.length - pos;
        if (len <= 0)
          return Promise.resolve();
        if (len > 63) {
          len = 63;
          frame[0] = HF2_FLAG_CMDPKT_BODY;
        } else {
          frame[0] = HF2_FLAG_CMDPKT_LAST;
        }
        if (serial)
          frame[0] = serial == 1 ? HF2_FLAG_SERIAL_OUT : HF2_FLAG_SERIAL_ERR;
        frame[0] |= len;
        for (let i = 0; i < len; ++i)
          frame[i + 1] = buf[pos + i];
        if (!this.io)
          return Promise.resolve();
        return this.io.sendPacketAsync(frame).then(() => loop(pos + len));
      };
      return loop(0);
    }
    onEvent(id, f) {
      assert(!!(id & HF2_EV_MASK));
      this.eventHandlers[id + ""] = f;
    }
    onJDMessage(f) {
      this.talkAsync(HF2_CMD_JDS_CONFIG, encodeU32LE([1]));
      this.onEvent(HF2_EV_JDS_PACKET, f);
    }
    sendJDMessageAsync(buf) {
      return this.talkAsync(HF2_CMD_JDS_SEND, buf).then(() => {
      });
    }
    handleEvent(buf) {
      const evid = read32(buf, 0);
      const f = this.eventHandlers[evid + ""];
      if (f) {
        f(buf.slice(4));
      } else {
        this.io.log("unhandled event: " + evid.toString(16));
      }
    }
    onSerial(data, iserr) {
    }
    async postConnectAsync() {
      await this.checkMode();
      const buf = await this.talkAsync(HF2_CMD_INFO);
      this.io.log("connected to " + bufferToString(buf));
    }
    async checkMode() {
      const info = await this.talkAsync(HF2_CMD_BININFO);
      if (!info)
        throwError("device disconnected");
      const mode = read32(info, 0);
      this.io.log(`mode ${mode}`);
      if (mode == HF2_MODE_USERSPACE) {
        this.io.log(`device in user-space mode`);
      } else if (mode == HF2_MODE_BOOTLOADER) {
        this.io.log(
          `device in bootloader mode, reseting into user-space mode`
        );
        await this.talkAsync(HF2_CMD_RESET_INTO_APP);
        throwError("Device in bootloader mode");
      } else {
        throwError("Unknown device operation mode");
      }
    }
    async disconnectAsync() {
      if (this.io) {
        const io = this.io;
        this.io = void 0;
        await io.disconnectAsync();
      }
    }
  };

  // src/jdom/transport/microbit.ts
  var MICROBIT_V2_VENDOR_ID = 3368;
  var MICROBIT_V2_PRODUCT_ID = 516;
  var pageShift = 10;
  var CMSISProto = class {
    constructor(io) {
      this.io = io;
      this.q = new PromiseQueue();
      this.sendQ = [];
    }
    startRecvToLoop() {
      console.assert(!this._lastInterval);
      let last = this.recvTo;
      this._lastInterval = setInterval(() => {
        if (!this.io)
          this.stopRecvToLoop();
        if (last && last == this.recvTo) {
          last();
        }
        last = this.recvTo;
      }, 200);
    }
    stopRecvToLoop() {
      if (this._lastInterval) {
        clearInterval(this._lastInterval);
        this._lastInterval = void 0;
      }
    }
    error(msg, code) {
      this.stopRecvToLoop();
      this.io?.error(msg, code);
      this.xchgAddr = null;
    }
    onJDMessage(f) {
      this._onJDMsg = f;
    }
    sendJDMessageAsync(buf) {
      if (buf.length & 3) {
        const tmp = new Uint8Array(buf.length + 3 & ~3);
        tmp.set(buf);
        buf = tmp;
      }
      return new Promise((resolve) => {
        this.sendQ.push({
          buf,
          cb: resolve
        });
      });
    }
    async disconnectAsync() {
      if (this.io) {
        console.debug(`micro:bit: disconnect proto`);
        this.stopRecvToLoop();
        this._onJDMsg = () => console.warn("rogue jd callback");
        const io = this.io;
        this.io = void 0;
        if (io)
          await io.disconnectAsync();
      }
    }
    recvAsync() {
      return new Promise((resolve, reject) => {
        if (!this.io) {
          reject(new Error("USB disconnected"));
          return;
        }
        this.io.recvPacketAsync().then(
          (v) => {
            const f = resolve;
            resolve = null;
            if (f) {
              this.recvTo = null;
              f(v);
            }
          },
          (err) => {
            if (resolve) {
              resolve = null;
              this.recvTo = null;
              reject(err);
            }
          }
        );
        this.recvTo = () => {
          if (resolve) {
            resolve = null;
            reject(new Error("CMSIS recv timeout"));
          }
        };
      });
    }
    talkAsync(cmds) {
      return this.q.enqueue("talk", async () => {
        if (!this.io) {
          this.error("micro:bit disconnected");
          return;
        }
        await this.io.sendPacketAsync(new Uint8Array(cmds));
        if (!this.io) {
          this.error("micro:bit disconnected");
          return;
        }
        let response = await this.recvAsync();
        if (response[0] !== cmds[0]) {
          const msg = `Bad response for ${cmds[0]} -> ${response[0]}, try again`;
          console.debug(msg, { cmds, response });
          try {
            response = await this.recvAsync();
          } catch (e) {
            this.error(msg);
          }
          if (response[0] !== cmds[0])
            this.error(msg);
        }
        return response;
      });
    }
    talkHexAsync(str) {
      return this.talkAsync(fromHex(str.replace(/ /g, "")));
    }
    decodeString(buf) {
      const len = buf[1];
      const ss = buf.slice(2, 2 + len);
      return uint8ArrayToString(ss);
    }
    async setBaudRate() {
      const setBaud = [130, 0, 0, 0, 0];
      write32(setBaud, 1, 115200);
      await this.talkAsync(setBaud);
    }
    async xchgLoop() {
      let currSend;
      while (this.io) {
        const now = Date.now();
        if (Flags.diagnostics && this.lastXchg && now - this.lastXchg > 50) {
          console.warn("slow xchg: " + (now - this.lastXchg) + "ms");
        }
        this.lastXchg = now;
        let numev = 0;
        let inp = await this.readBytes(this.xchgAddr + 12, 256, true);
        if (inp[2]) {
          await this.writeWord(this.xchgAddr + 12, 0);
          await this.triggerIRQ();
          inp = inp.slice(0, inp[2] + 12);
          this._onJDMsg(inp);
          numev++;
        }
        let sendFree = false;
        if (currSend) {
          const send = await this.readBytes(this.xchgAddr + 12 + 256, 4);
          if (!send[2]) {
            currSend.cb();
            currSend = null;
            sendFree = true;
            numev++;
          }
        }
        if (!currSend && this.sendQ.length) {
          if (!sendFree) {
            const send = await this.readBytes(
              this.xchgAddr + 12 + 256,
              4
            );
            if (!send[2])
              sendFree = true;
          }
          if (sendFree) {
            currSend = this.sendQ.shift();
            const bbody = currSend.buf.slice(4);
            await this.writeWords(
              this.xchgAddr + 12 + 256 + 4,
              new Uint32Array(bbody.buffer)
            );
            const bhead = currSend.buf.slice(0, 4);
            await this.writeWords(
              this.xchgAddr + 12 + 256,
              new Uint32Array(bhead.buffer)
            );
            await this.triggerIRQ();
            this.lastSend = Date.now();
            numev++;
          } else {
            if (this.lastSend) {
              const d = Date.now() - this.lastSend;
              if (d > 50) {
                this.lastSend = 0;
                console.warn("failed to send packet fast enough");
              }
            }
          }
        }
        if (numev == 0) {
          await delay(0);
        }
      }
    }
    async readSerial() {
      let buf = await this.talkAsync([131]);
      const len = buf?.[1];
      if (len) {
        buf = buf.slice(2, 2 + len);
        if (this.pendingSerial)
          buf = bufferConcat(this.pendingSerial, buf);
        let ptr = 0;
        let beg = 0;
        while (ptr < buf.length) {
          if (buf[ptr] == 10 || buf[ptr] == 13) {
            beg = ptr + 1;
          }
          ptr++;
        }
        buf = buf.slice(beg);
        this.pendingSerial = buf.length ? buf : null;
        if (this.pendingSerial)
          this.lastPendingSerial = Date.now();
      } else if (this.pendingSerial) {
        const d = Date.now() - this.lastPendingSerial;
        if (d > 500) {
          const s = fromUTF8(uint8ArrayToString(this.pendingSerial));
          this.pendingSerial = null;
          console.debug("SERIAL[TO]: " + s);
        }
      }
      return len;
    }
    async talkStringAsync(...cmds) {
      return this.talkAsync(cmds).then((buf) => this.decodeString(buf));
    }
    async readDP(reg) {
      const nums = [5, 0, 1, 2 | reg, 0, 0, 0, 0];
      const buf = await this.talkAsync(nums);
      return read32(buf, 3);
    }
    async setupTAR(addr) {
      const nums = [5, 0, 2, 1, 82, 0, 0, 35, 5, 0, 0, 0, 0];
      write32(nums, 9, addr);
      await this.talkAsync(nums);
    }
    async writeWords(addr, data) {
      const pstart = addr >> pageShift;
      const pend = addr + data.length * 4 - 1 >> pageShift;
      if (pstart == pend) {
        return this.writeWordsCore(addr, data);
      } else {
        const addrend = (addr >> pageShift) + 1 << pageShift;
        const len = addrend - addr >> 2;
        await this.writeWords(addr, data.slice(0, len));
        await this.writeWords(addrend, data.slice(len));
      }
    }
    async writeWordsCore(addr, data) {
      await this.setupTAR(addr);
      const MAX = 14;
      let ptr = 0;
      const reqHd = [6, 0, MAX, 0, 13];
      for (let i = 0; i < MAX * 4; ++i)
        reqHd.push(0);
      const req = new Uint8Array(reqHd);
      let overhang = 1;
      let ptrTX = 0;
      const count = data.length;
      const dataBytes = new Uint8Array(data.buffer);
      let lastCh = MAX;
      await this.q.enqueue("talk", async () => {
        while (ptr < count) {
          const ch = Math.min(count - ptrTX, MAX);
          if (ch) {
            req[2] = ch;
            req.set(dataBytes.slice(ptrTX * 4, (ptrTX + ch) * 4), 5);
            if (!this.io) {
              this.error("disconnected");
              return;
            }
            await this.io.sendPacketAsync(
              ch == MAX ? req : req.slice(0, 5 + 4 * ch)
            );
            ptrTX += ch;
            lastCh = ch;
          }
          if (overhang-- > 0)
            continue;
          const buf = await this.recvAsync();
          if (buf[0] != req[0])
            this.error(`bad response, ${buf[0]} != ${req[0]}`);
          if (buf[1] != MAX && buf[1] != lastCh)
            this.error(
              `bad response, ${buf[1]} != ${MAX} && ${buf[1]} != ${lastCh}`
            );
          ptr += buf[1];
        }
      });
    }
    async readBytes(addr, count, jdmode = false) {
      if (addr & 3 || count & 3)
        this.error("unaligned");
      const b = await this.readWords(addr, count >> 2, jdmode);
      return new Uint8Array(b.buffer);
    }
    async readWords(addr, count, jdmode = false) {
      const pstart = addr >> pageShift;
      const pend = addr + count * 4 - 1 >> pageShift;
      if (pstart == pend) {
        return this.readWordsCore(addr, count, jdmode);
      } else {
        const addrend = (addr >> pageShift) + 1 << pageShift;
        const len = addrend - addr >> 2;
        const b0 = await this.readWords(addr, len, jdmode);
        if (jdmode && b0.length < len)
          return b0;
        const b1 = await this.readWords(addrend, count - len);
        const res = new Uint32Array(count);
        res.set(b0);
        res.set(b1, len);
        return res;
      }
    }
    async readWordsCore(addr, count, jdmode) {
      await this.setupTAR(addr);
      const MAX = 14;
      const res = new Uint32Array(count);
      let ptr = 0;
      const req = new Uint8Array([6, 0, MAX, 0, 15]);
      let overhang = 1;
      let ptrTX = 0;
      let numPending = 0;
      await this.q.enqueue("talk", async () => {
        while (ptr < count || numPending) {
          const ch = Math.min(count - ptrTX, MAX);
          if (ch > 0) {
            req[2] = ch;
            numPending++;
            if (!this.io) {
              this.error("disconnected");
              return;
            }
            await this.io.sendPacketAsync(req);
            ptrTX += ch;
          }
          if (overhang-- > 0)
            continue;
          const buf = await this.recvAsync();
          numPending--;
          if (buf[0] != req[0]) {
            this.error("bad response");
            return;
          }
          const len = buf[1];
          const words = new Uint32Array(
            buf.slice(4, (1 + len) * 4).buffer
          );
          if (words.length != len) {
            this.error("bad response2");
            return;
          }
          res.set(words, ptr);
          if (jdmode && ptr == 0) {
            const frmsz = new Uint8Array(res.buffer)[2];
            const words2 = frmsz + 12 + 3 >> 2;
            if (count > words2)
              count = words2;
          }
          ptr += words.length;
        }
      });
      return res;
    }
    async findExchange() {
      const memStart = 536870912;
      const memStop = memStart + 128 * 1024;
      const checkSize = 1024;
      let p0 = 536895488;
      let p1 = 536895488 + checkSize;
      const check = async (addr) => {
        if (addr < memStart)
          return null;
        if (addr + checkSize > memStop)
          return null;
        const buf = await this.readWords(addr, checkSize >> 2);
        for (let i = 0; i < buf.length; ++i) {
          if (buf[i] == 2020426826 && buf[i + 1] == 2963718377)
            return addr + (i << 2);
        }
        return 0;
      };
      while (true) {
        const a0 = await check(p0);
        if (a0)
          return a0;
        const a1 = await check(p1);
        if (a1)
          return a1;
        if (a0 === null && a1 === null)
          return null;
        p0 -= checkSize;
        p1 += checkSize;
      }
    }
    async triggerIRQ() {
      const addr = 3758154240 + (this.irqn >> 5) * 4;
      const data = new Uint32Array([1 << (this.irqn & 31)]);
      await this.writeWords(addr, data);
    }
    writeWord(addr, val) {
      return this.writeWords(addr, new Uint32Array([val]));
    }
    async reset() {
      await this.writeWord(3758157308, 0);
      await this.writeWord(3758157068, 100270080 | 1 << 2);
    }
    async postConnectAsync() {
      this.startRecvToLoop();
      const devid = await this.talkStringAsync(128);
      if (/^9902/.test(devid)) {
        this.error(
          `micro:bit v1 is not supported. sorry.`,
          ERROR_MICROBIT_V1
        );
        return;
      }
      if (!/^990[3456789]/.test(devid)) {
        this.error(
          `Invalid Vendor0 response: ` + devid,
          ERROR_MICROBIT_UNKNOWN
        );
        return;
      }
      this.io.log("DAPLink v" + await this.talkStringAsync(0, 4));
      await this.setBaudRate();
      const freq = [17, 0, 0, 0, 0];
      write32(freq, 1, 1e7);
      await this.talkAsync(freq);
      const inits = [
        "02 00",
        // connect
        "04 00 64 00 00 00",
        // configure delays
        // SWD switch
        "12 38 FF FF FF FF FF FF FF",
        // ones
        "12 10 9E E7",
        // SWD
        "12 38 FF FF FF FF FF FF FF",
        // ones
        "12 08 00",
        // zero
        // read DPIDR
        "05 00 01 02 00 00 00 00",
        // clear errors
        "05 00 03 00 04 00 00 00 08 00 00 00 00 04 00 00 00 50"
      ];
      for (const ini of inits)
        await this.talkHexAsync(ini);
      for (let i = 0; i < 100; ++i) {
        const st = await this.readDP(4);
        const mask = 1 << 29 | 1 << 31;
        if ((st & mask) == mask)
          break;
        await delay(20);
      }
      await this.reset();
      await delay(1e3);
      const xchg = await this.findExchange();
      if (xchg === null) {
        this.error(
          `exchange address not found; add jacdac to your project`,
          ERROR_MICROBIT_JACDAC_MISSING
        );
        return;
      }
      this.xchgAddr = xchg;
      const info = await this.readBytes(xchg, 16);
      this.irqn = info[8];
      if (info[12 + 2] != 255) {
        this.error(
          "invalid memory; try power-cycling the micro:bit",
          ERROR_MICROBIT_INVALID_MEMORY
        );
        return;
      }
      await this.writeWord(xchg + 12, 0);
      this.io.log(
        `exchange address: 0x${xchg.toString(16)}; irqn=${this.irqn}`
      );
      this.xchgLoop().catch((e) => {
        if (!isCancelError(e))
          console.debug(e);
        this.error(e?.message || "an error occured", errorCode(e));
      });
    }
  };

  // src/jdom/transport/usbio.ts
  var USB_FILTERS = {
    filters: [
      {
        // hf2 devices (incl. arcade)
        classCode: 255,
        subclassCode: HF2_DEVICE_MAJOR
      },
      {
        // micro:bit v2
        vendorId: MICROBIT_V2_VENDOR_ID,
        productId: MICROBIT_V2_PRODUCT_ID
      }
    ]
  };
  var controlTransferGetReport = 1;
  var controlTransferSetReport = 9;
  var controlTransferOutReport = 512;
  var controlTransferInReport = 256;
  var USBIO = class {
    constructor(options) {
      this.options = options;
      this.readLoopStarted = false;
      this.ready = false;
      this.rawMode = false;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      this.onData = (v) => {
      };
      this.onError = (e) => {
        console.warn(`usb error: ${errorCode(e) || ""} ${e ? e.stack : e}`);
      };
    }
    description() {
      return this.dev?.productName;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    log(msg, v) {
      if (Flags.diagnostics) {
        if (v != void 0)
          console.debug("usb: " + msg, v);
        else
          console.debug("usb: " + msg);
      }
    }
    mkProto() {
      return this.isMicrobit() ? new CMSISProto(this) : new HF2Proto(this);
    }
    clearDev() {
      if (this.dev) {
        this.dev = null;
        this.epIn = null;
        this.epOut = null;
        this.onData = () => console.warn("rogue hf2 onData");
      }
    }
    disconnectAsync() {
      this.ready = false;
      if (!this.dev)
        return Promise.resolve();
      console.debug("close device");
      return this.dev.close().catch((e) => {
        if (!isCancelError(e))
          console.debug(e);
      }).then(() => {
        this.clearDev();
        return delay(500);
      });
    }
    recvPacketAsync() {
      if (!this.rawMode)
        this.error("rawMode required");
      return this.recvPacketCoreAsync();
    }
    recvPacketCoreAsync() {
      const final = (res) => {
        if (res.status != "ok")
          this.error("USB IN transfer failed");
        const arr = new Uint8Array(res.data.buffer);
        if (arr.length == 0)
          return this.recvPacketCoreAsync();
        return arr;
      };
      if (!this.dev)
        return Promise.reject(new Error("Disconnected"));
      if (!this.epIn) {
        return this.dev.controlTransferIn(
          {
            requestType: "class",
            recipient: "interface",
            request: controlTransferGetReport,
            value: controlTransferInReport,
            index: this.iface.interfaceNumber
          },
          64
        ).then(final);
      }
      return this.dev.transferIn(this.epIn.endpointNumber, 64).then(final);
    }
    error(msg, code) {
      const e = new JDError(
        `device ${this.dev ? this.dev.productName : "n/a"} (${msg})`,
        { code }
      );
      this.onError(e);
    }
    async readLoop() {
      if (this.rawMode || this.readLoopStarted)
        return;
      this.readLoopStarted = true;
      console.debug("usb: start read loop");
      while (true) {
        if (!this.ready) {
          break;
        }
        try {
          const buf = await this.recvPacketCoreAsync();
          if (buf[0]) {
            this.onData(buf);
          } else {
            await delay(5);
          }
        } catch (err) {
          if (this.dev) {
            if (!isCancelError(err))
              this.onError(err);
            await this.disconnectAsync();
          }
          await delay(300);
        }
      }
    }
    sendPacketAsync(pkt) {
      if (!this.dev)
        return Promise.reject(new Error("Disconnected"));
      assert(pkt.length <= 64);
      if (!this.epOut) {
        return this.dev.controlTransferOut(
          {
            requestType: "class",
            recipient: "interface",
            request: controlTransferSetReport,
            value: controlTransferOutReport,
            index: this.iface.interfaceNumber
          },
          pkt
        ).then((res) => {
          if (res.status != "ok")
            this.error("USB CTRL OUT transfer failed");
        });
      }
      return this.dev.transferOut(this.epOut.endpointNumber, pkt).then((res) => {
        if (res.status != "ok")
          this.error("USB OUT transfer failed");
      });
    }
    isMicrobit() {
      return this.dev && this.dev.productId == 516 && this.dev.vendorId == 3368;
    }
    checkDevice() {
      this.iface = void 0;
      this.altIface = void 0;
      if (!this.dev)
        return false;
      console.debug(
        "usb: connect device " + this.dev.manufacturerName + " " + this.dev.productName
      );
      const subcl = this.isMicrobit() ? 0 : HF2_DEVICE_MAJOR;
      for (const iface of this.dev.configuration.interfaces) {
        const alt = iface.alternates[0];
        if (alt.interfaceClass == 255 && alt.interfaceSubclass == subcl) {
          this.iface = iface;
          this.altIface = alt;
          break;
        }
      }
      if (this.isMicrobit())
        this.rawMode = true;
      return !!this.iface;
    }
    async tryReconnectAsync(deviceId) {
      try {
        const devices = await this.options.getDevices(USB_FILTERS);
        this.dev = deviceId ? devices.find((dev) => dev.serialNumber === deviceId) : devices[0];
      } catch (e) {
        if (!isCancelError(e))
          console.debug(e);
        this.dev = void 0;
      }
    }
    async requestDeviceAsync() {
      try {
        this.dev = await this.options.requestDevice(USB_FILTERS);
      } catch (e) {
        if (!isCancelError(e))
          console.debug(e);
        this.dev = void 0;
      }
    }
    async connectAsync(background, deviceId) {
      await this.tryReconnectAsync(deviceId);
      if (!this.dev && !background)
        await this.requestDeviceAsync();
      if (!this.dev && background)
        throwError("usb: device not paired", { cancel: true });
      await this.openDeviceAsync();
      const proto = this.mkProto();
      try {
        await proto.postConnectAsync();
      } catch (e) {
        if (!isCancelError(e))
          console.debug(e);
        await proto.disconnectAsync();
        throw e;
      }
      return proto;
    }
    async openDeviceAsync() {
      if (!this.dev)
        throwError("usb: device not found", { cancel: true });
      if (!this.checkDevice())
        throwError("usb: device does not support HF2", {
          code: ERROR_TRANSPORT_HF2_NOT_SUPPORTED
        });
      await this.dev.open();
      await this.dev.selectConfiguration(1);
      if (this.altIface.endpoints.length) {
        this.epIn = this.altIface.endpoints.filter(
          (e) => e.direction == "in"
        )[0];
        this.epOut = this.altIface.endpoints.filter(
          (e) => e.direction == "out"
        )[0];
        assert(this.epIn.packetSize == 64);
        assert(this.epOut.packetSize == 64);
      }
      console.debug(`usb: claim interface ${this.iface.interfaceNumber}`);
      await this.dev.claimInterface(this.iface.interfaceNumber);
      console.debug("usb: all connected");
      this.ready = true;
      this.readLoop();
    }
  };

  // src/worker/usbtransportproxy.ts
  var { debug } = console;
  var USBTransportProxy = class {
    constructor() {
    }
    async connect(deviceId) {
      if (Flags.diagnostics)
        debug(`jdsw: connect`, { deviceId });
      if (this.hf2) {
        if (Flags.diagnostics)
          debug(`jdsw: cleanup hf2`);
        await this.hf2.disconnectAsync();
        this.hf2 = void 0;
      }
      const io = new USBIO({
        getDevices: () => navigator.usb.getDevices()
      });
      io.onError = (e) => {
        debug(`jdsw: error`, e);
        postMessage({
          jacdac: true,
          type: "error",
          error: {
            message: e.message,
            stack: e.stack,
            name: e.name,
            jacdacName: errorCode(e)
          }
        });
      };
      const onJDMessage = (buf) => {
        self.postMessage({
          jacdac: true,
          type: "frame",
          payload: buf
        });
      };
      this.hf2 = await io.connectAsync(true, deviceId);
      this.hf2.onJDMessage(onJDMessage);
    }
    async send(payload) {
      await this.hf2?.sendJDMessageAsync(payload);
    }
    async disconnect() {
      if (Flags.diagnostics)
        debug(`jdsw: disconnect`);
      const h = this.hf2;
      this.hf2 = void 0;
      if (h)
        await h.disconnectAsync();
    }
  };

  // src/worker/jacdac-worker.ts
  var { debug: debug2 } = console;
  debug2(`jdsw: starting...`);
  var proxy;
  function handleError(resp, e) {
    self.postMessage({
      ...resp,
      error: {
        message: e.message,
        stack: e.stack,
        name: e.name,
        jacdacName: errorCode(e)
      }
    });
  }
  async function handleCommand(resp, handler) {
    try {
      await handler();
      self.postMessage(resp);
    } catch (e) {
      handleError(resp, e);
    }
  }
  async function handleMessage(event) {
    const { data } = event;
    const { jacdac, type, payload } = data;
    if (!jacdac)
      return;
    switch (type) {
      case "connect": {
        if (proxy)
          await proxy.disconnect();
        const { deviceId } = data;
        proxy = new USBTransportProxy();
        await handleCommand(data, () => proxy.connect(deviceId));
        break;
      }
      case "packet":
        proxy?.send(payload).then(
          () => {
          },
          (e) => handleError(payload, e)
        );
        break;
      case "disconnect":
        if (proxy) {
          await handleCommand(data, () => proxy?.disconnect());
        }
        break;
    }
  }
  self.addEventListener("message", handleMessage);
  debug2(`jdsw: ready...`);
})();
//# sourceMappingURL=jacdac-worker.js.map
