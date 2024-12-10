"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[7617],{

/***/ 30603:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);
__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(64938));
var _jsxRuntime = __webpack_require__(85893);
var _default = (0, _createSvgIcon.default)([/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "m12 2-5.5 9h11z"
}, "0"), /*#__PURE__*/(0, _jsxRuntime.jsx)("circle", {
  cx: "17.5",
  cy: "17.5",
  r: "4.5"
}, "1"), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M3 13.5h8v8H3z"
}, "2")], 'Category');
exports.Z = _default;

/***/ }),

/***/ 95492:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ IDChip; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mui_icons_material_Fingerprint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80610);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90461);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6867);
/* harmony import */ var _PacketsContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12457);
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5355);
/* harmony import */ var _ui_Tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38041);
// tslint:disable-next-line: no-submodule-imports match-default-export-name
function IDChip(props){var{id,className,filter}=props;var{filter:packetFilter,setFilter:setPacketFilter}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_PacketsContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);var{setDrawerType}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_AppContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP);var ids=typeof id==="string"?id:"0x"+(id!==undefined?id.toString(16):"???");var filtered=packetFilter&&packetFilter.indexOf(filter)>-1;var handleFilterClick=()=>{var _packetFilter$replace;if(filtered)setPacketFilter(packetFilter===null||packetFilter===void 0?void 0:(_packetFilter$replace=packetFilter.replace(filter,""))===null||_packetFilter$replace===void 0?void 0:_packetFilter$replace.trim());else setPacketFilter((packetFilter===null||packetFilter===void 0?void 0:packetFilter.trim())+" "+filter);setDrawerType(_AppContext__WEBPACK_IMPORTED_MODULE_2__/* .DrawerType.Packets */ .jw.Packets);};var icon=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Fingerprint__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,null);var title=filtered?"remove filter "+filter:"add filter "+filter;if(filter)return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Tooltip__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{title:filtered?"remove filter "+filter:"add filter "+filter},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,{className:className,size:"small",icon:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,{"aria-label":title,onClick:handleFilterClick,size:"small"},icon),label:ids})));else return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,{"aria-label":title,className:className,size:"small",icon:icon,title:"identifier "+ids,label:ids});}

/***/ }),

/***/ 1243:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ PacketSpecification; }
});

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 1 modules
var jdom_spec = __webpack_require__(62070);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(90948);
// EXTERNAL MODULE: ./src/components/ui/Alert.tsx
var Alert = __webpack_require__(46259);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@mui/material/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(90461);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(15725);
// EXTERNAL MODULE: ./src/components/devices/DeviceCard.tsx + 1 modules
var DeviceCard = __webpack_require__(73568);
// EXTERNAL MODULE: ./node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(65295);
// EXTERNAL MODULE: ./node_modules/@mui/material/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(42643);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(2658);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(16821);
// EXTERNAL MODULE: ./src/components/RegisterInput.tsx + 2 modules
var RegisterInput = __webpack_require__(48831);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(63339);
;// CONCATENATED MODULE: ./src/components/ui/AutoGrid.tsx
function AutoGrid(props){var{children,spacing}=props;if(children&&Array.isArray(children))return/*#__PURE__*/react.createElement(Grid/* default */.ZP,{container:true,spacing:spacing},children.map((child,i)=>/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,xs:12,key:child.key||i},child)));else return children;}
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(3964);
;// CONCATENATED MODULE: ./src/components/ServiceRegisters.tsx
function ServiceRegisters(props){var{service,registerIdentifiers,filter,showRegisterName,hideMissingValues,showTrends}=props;var specification=(0,useChange/* default */.Z)(service,spec=>spec.specification);var registers=(0,react.useMemo)(()=>{var _packets$filter,_ids$map;var packets=specification===null||specification===void 0?void 0:specification.packets;var ids=registerIdentifiers||(packets===null||packets===void 0?void 0:(_packets$filter=packets.filter(pkt=>(0,jdom_spec/* isRegister */.x5)(pkt)))===null||_packets$filter===void 0?void 0:_packets$filter.map(pkt=>pkt.identifier));var r=(ids===null||ids===void 0?void 0:(_ids$map=ids.map(id=>service.register(id)))===null||_ids$map===void 0?void 0:_ids$map.filter(reg=>!!reg))||[];if(filter)r=r.filter(filter);return r;},[specification,registerIdentifiers,filter]);return/*#__PURE__*/react.createElement(AutoGrid,{spacing:1},registers.map(register=>/*#__PURE__*/react.createElement(RegisterInput/* default */.Z,{key:register.id,register:register,showRegisterName:showRegisterName,hideMissingValues:hideMissingValues,showTrend:showTrends&&register.code===constants/* SystemReg.Reading */.ZJq.Reading,visible:true})));}
// EXTERNAL MODULE: ./node_modules/@mui/material/Badge/Badge.js + 4 modules
var Badge = __webpack_require__(8304);
// EXTERNAL MODULE: ./src/components/KindIcon.tsx
var KindIcon = __webpack_require__(11799);
// EXTERNAL MODULE: ./src/jacdac/useEventCount.ts
var useEventCount = __webpack_require__(67768);
// EXTERNAL MODULE: ./src/components/devices/DeviceName.tsx
var DeviceName = __webpack_require__(9400);
;// CONCATENATED MODULE: ./src/components/EventInput.tsx
function EventInput(props){var{event,showName,showDeviceName}=props;var count=(0,useEventCount/* default */.Z)(event);var spec=event.specification;return/*#__PURE__*/react.createElement(react.Fragment,null,showDeviceName&&/*#__PURE__*/react.createElement(Typography/* default */.Z,null,/*#__PURE__*/react.createElement(DeviceName/* default */.Z,{device:event.service.device}),"/"),showName&&spec&&/*#__PURE__*/react.createElement(Typography/* default */.Z,{gutterBottom:true},spec.name),/*#__PURE__*/react.createElement(Badge/* default */.Z,{badgeContent:count,color:"primary"},/*#__PURE__*/react.createElement(KindIcon/* default */.ZP,{kind:"event"})));}
;// CONCATENATED MODULE: ./src/components/ServiceEvents.tsx
function ServiceEvents(props){var{service,eventIdentifiers,showEventName}=props;var spec=service.specification;var packets=spec.packets;var events=packets.filter(jdom_spec/* isEvent */.cO);if(eventIdentifiers!==undefined)events=events.filter(event=>eventIdentifiers.indexOf(event.identifier)>-1);return/*#__PURE__*/react.createElement(AutoGrid,{spacing:1},events.map(event=>/*#__PURE__*/react.createElement(EventInput,{key:"event"+event.identifier,event:service.event(event.identifier),showName:showEventName})));}
// EXTERNAL MODULE: ./node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(42440);
// EXTERNAL MODULE: ./node_modules/@mui/material/ListItem/ListItem.js + 3 modules
var ListItem = __webpack_require__(70576);
// EXTERNAL MODULE: ./node_modules/@mui/material/CardActions/CardActions.js + 1 modules
var CardActions = __webpack_require__(49161);
// EXTERNAL MODULE: ./src/components/devices/DeviceCardHeader.tsx + 2 modules
var DeviceCardHeader = __webpack_require__(21979);
// EXTERNAL MODULE: ./src/components/alert/DeviceLostAlert.tsx
var DeviceLostAlert = __webpack_require__(32589);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/pipes.ts
var pipes = __webpack_require__(39727);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/command.ts
var jdom_command = __webpack_require__(65105);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/pretty.ts
var pretty = __webpack_require__(34743);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/packet.ts
var packet = __webpack_require__(80662);
// EXTERNAL MODULE: ./src/components/CmdButton.tsx
var CmdButton = __webpack_require__(10662);
// EXTERNAL MODULE: ./src/jacdac/useBus.ts
var useBus = __webpack_require__(26040);
;// CONCATENATED MODULE: ./src/components/CommandInput.tsx
function hasPipeReport(info){return info.fields.find(f=>f.type=="pipe");}function CommandInput(props){var{service,command,showDeviceName,args,setReports}=props;var bus=(0,useBus/* default */.Z)();var{specification}=service;var requiredArgLength=command.fields.length-(hasPipeReport(command)?1:0);var missingArguments=((args===null||args===void 0?void 0:args.length)||0)!==requiredArgLength;var disabled=missingArguments;var reportSpec=command.hasReport&&specification.packets.find(p=>(0,jdom_spec/* isReportOf */.Dm)(command,p));var handleClick=/*#__PURE__*/function(){var _ref=(0,asyncToGenerator/* default */.Z)(function*(mounted){var pkt=!(args!==null&&args!==void 0&&args.length)?packet/* Packet.onlyHeader */.W.onlyHeader(command.identifier):(0,jdom_command/* packArguments */.n)(command,args);if(setReports&&reportSpec){var reportPacket=yield service.sendCmdAwaitResponseAsync(pkt);if(!mounted())return;var decoded=reportPacket===null||reportPacket===void 0?void 0:reportPacket.decoded;setReports([decoded]);}else if(setReports&&hasPipeReport(command)){var inp;try{inp=new pipes/* InPipeReader */.oI(bus);var cmd=inp.openCommand(command.identifier);yield service.sendPacketAsync(cmd,true);console.log((0,pretty/* printPacket */.$_)(cmd));// keep this call, it sets up pretty to understand packages
var{output}=yield inp.readAll();var _reports=output.filter(ot=>{var _ot$data;return!!((_ot$data=ot.data)!==null&&_ot$data!==void 0&&_ot$data.length);}).map(ot=>ot===null||ot===void 0?void 0:ot.decoded);if(!mounted())return;setReports(_reports);}finally{var _inp;(_inp=inp)===null||_inp===void 0?void 0:_inp.unmount();}}else yield service.sendPacketAsync(pkt,true);});return function handleClick(_x){return _ref.apply(this,arguments);};}();return/*#__PURE__*/react.createElement(CmdButton/* default */.Z,{trackName:"command.input",trackProperties:{service:(0,pretty/* serviceName */.HV)(service.serviceClass),serviceClass:service.serviceClass},variant:"contained",disabled:disabled,onClick:handleClick},showDeviceName&&/*#__PURE__*/react.createElement(Typography/* default */.Z,null,/*#__PURE__*/react.createElement(DeviceName/* default */.Z,{device:service.device}),"/"),command.name.replace(/_/g," "));}
// EXTERNAL MODULE: ./src/components/fields/MembersInput.tsx + 3 modules
var MembersInput = __webpack_require__(43039);
;// CONCATENATED MODULE: ./src/components/DecodedPacketItem.tsx
function DecodedPacketItem(props){var{pkt}=props;var{decoded,service}=pkt;var specifications=(0,react.useMemo)(()=>decoded.map(d=>d.info),[decoded]);var values=(0,react.useMemo)(()=>decoded.map(d=>d.value),[decoded]);return/*#__PURE__*/react.createElement(MembersInput/* default */.Z,{serviceSpecification:service,specifications:specifications,values:values});}
// EXTERNAL MODULE: ./src/components/specification/ServiceSpecificationStatusAlert.tsx
var ServiceSpecificationStatusAlert = __webpack_require__(43897);
;// CONCATENATED MODULE: ./src/components/ServiceCard.tsx
// tslint:disable-next-line: no-submodule-imports
// tslint:disable-next-line: no-submodule-imports
// tslint:disable-next-line: no-submodule-imports
var PREFIX="ServiceCard";var classes={root:PREFIX+"root",bullet:PREFIX+"bullet",title:PREFIX+"title",pos:PREFIX+"pos"};var StyledCard=(0,styled/* default */.ZP)(Card/* default */.Z)({["&."+classes.root]:{minWidth:275},["& ."+classes.bullet]:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},["& ."+classes.title]:{fontSize:14},["& ."+classes.pos]:{marginBottom:12}});function ServiceCard(props){var{service,linkToService,registerIdentifiers,showServiceName,showMemberName,eventIdentifiers,commandIdentifier}=props;var{specification}=service;var{0:reports,1:setReports}=(0,react.useState)(undefined);// eslint-disable-next-line @typescript-eslint/no-explicit-any
var{0:commandArgs,1:setCommandArgs}=(0,react.useState)([]);var hasCommandIdentifier=commandIdentifier!==undefined;var hasRegisterIdentifiers=!!(registerIdentifiers!==null&&registerIdentifiers!==void 0&&registerIdentifiers.length);var hasEventIdentifiers=!!(eventIdentifiers!==null&&eventIdentifiers!==void 0&&eventIdentifiers.length);var command=commandIdentifier!==undefined&&(specification===null||specification===void 0?void 0:specification.packets.find(pkt=>(0,jdom_spec/* isCommand */.ao)(pkt)&&pkt.identifier===commandIdentifier));return/*#__PURE__*/react.createElement(StyledCard,{className:classes.root},/*#__PURE__*/react.createElement(DeviceCardHeader/* default */.Z,{device:service.device,showAvatar:true}),/*#__PURE__*/react.createElement(CardContent/* default */.Z,null,showServiceName&&/*#__PURE__*/react.createElement(Typography/* default */.Z,{className:classes.title,color:"textSecondary",gutterBottom:true},/*#__PURE__*/react.createElement(gatsby_theme_material_ui/* Link */.rU,{to:linkToService&&service.specification?"/services/"+service.specification.shortId+"/":"/clients/javascript/jdom/service"},service.name)),/*#__PURE__*/react.createElement(Typography/* default */.Z,{variant:"body2",component:"div"},hasRegisterIdentifiers&&/*#__PURE__*/react.createElement(ServiceRegisters,{service:service,showRegisterName:showMemberName,registerIdentifiers:registerIdentifiers}),hasEventIdentifiers&&/*#__PURE__*/react.createElement(ServiceEvents,{service:service,showEventName:showMemberName,eventIdentifiers:eventIdentifiers}),command&&/*#__PURE__*/react.createElement(MembersInput/* default */.Z,{serviceSpecification:specification,serviceMemberSpecification:command,specifications:command.fields,values:commandArgs,setValues:setCommandArgs,showDataType:true}),!!(reports!==null&&reports!==void 0&&reports.length)&&/*#__PURE__*/react.createElement(List/* default */.Z,{key:"reports",dense:true},reports===null||reports===void 0?void 0:reports.map((report,ri)=>/*#__PURE__*/react.createElement(ListItem/* default */.ZP,{key:"report"+ri},/*#__PURE__*/react.createElement(DecodedPacketItem,{pkt:report}))))),!hasCommandIdentifier&&!hasRegisterIdentifiers&&!hasEventIdentifiers&&/*#__PURE__*/react.createElement(ServiceSpecificationStatusAlert/* default */.Z,{specification:specification}),/*#__PURE__*/react.createElement(DeviceLostAlert/* DeviceLostAlert */.M,{device:service===null||service===void 0?void 0:service.device})),/*#__PURE__*/react.createElement(CardActions/* default */.Z,null,command&&/*#__PURE__*/react.createElement(CommandInput,{service:service,command:command,args:commandArgs,setReports:setReports})));}
// EXTERNAL MODULE: ./src/components/useGridBreakpoints.ts
var useGridBreakpoints = __webpack_require__(44300);
// EXTERNAL MODULE: ./src/components/hooks/useDevices.ts
var useDevices = __webpack_require__(18891);
// EXTERNAL MODULE: ./src/components/hooks/useServices.ts
var useServices = __webpack_require__(73131);
;// CONCATENATED MODULE: ./src/components/devices/DeviceList.tsx
var DeviceList_PREFIX="DeviceList";var DeviceList_classes={root:DeviceList_PREFIX+"root"};var StyledGrid=(0,styled/* default */.ZP)(Grid/* default */.ZP)(_ref=>{var{theme}=_ref;return{["&."+DeviceList_classes.root]:{marginBottom:theme.spacing(1)}};});function DeviceList(props){var{serviceClass,linkToService,registerIdentifiers,showServiceName,showMemberName,showFirmware,showTemperature,showServiceButtons,eventIdentifiers,commandIdentifier}=props;var devices=(0,useDevices/* default */.Z)({serviceClass});var services=(0,useServices/* default */.Z)({serviceClass});var hasServiceClass=serviceClass!==undefined;var gridBreakpoints=(0,useGridBreakpoints/* default */.Z)(devices===null||devices===void 0?void 0:devices.length);return/*#__PURE__*/react.createElement(StyledGrid,{container:true,spacing:2,className:DeviceList_classes.root},!hasServiceClass&&devices.map(device=>/*#__PURE__*/react.createElement(Grid/* default */.ZP,Object.assign({key:device.id,item:true},gridBreakpoints),/*#__PURE__*/react.createElement(DeviceCard/* default */.Z,{device:device,showDescription:true,showTemperature:showTemperature,showFirmware:showFirmware,showServices:showServiceButtons}))),hasServiceClass&&services.map(service=>{return/*#__PURE__*/react.createElement(Grid/* default */.ZP,Object.assign({key:service.nodeId,item:true},gridBreakpoints),/*#__PURE__*/react.createElement(ServiceCard,{service:service,linkToService:linkToService,showServiceName:showServiceName,showMemberName:showMemberName,registerIdentifiers:registerIdentifiers,eventIdentifiers:eventIdentifiers,commandIdentifier:commandIdentifier}));}));}
// EXTERNAL MODULE: ./src/components/IDChip.tsx
var IDChip = __webpack_require__(95492);
// EXTERNAL MODULE: ./src/components/PacketsContext.tsx
var PacketsContext = __webpack_require__(12457);
// EXTERNAL MODULE: ./src/components/AppContext.tsx
var AppContext = __webpack_require__(5355);
// EXTERNAL MODULE: ./src/components/ui/Tooltip.tsx
var Tooltip = __webpack_require__(38041);
;// CONCATENATED MODULE: ./src/components/KindChip.tsx
function KindChip(props){var{kind,className}=props;var{filter,setFilter}=(0,react.useContext)(PacketsContext/* default */.Z);var{setDrawerType}=(0,react.useContext)(AppContext/* default */.ZP);var icon=(0,KindIcon/* default */.ZP)({kind});var chipFilter="kind:"+kind;var filtered=filter&&filter.indexOf(chipFilter)>-1;var handleClick=()=>{var _filter$replace;if(filtered)setFilter(filter===null||filter===void 0?void 0:(_filter$replace=filter.replace(chipFilter,""))===null||_filter$replace===void 0?void 0:_filter$replace.trim());else setFilter((filter===null||filter===void 0?void 0:filter.trim())+" "+chipFilter);setDrawerType(AppContext/* DrawerType.Packets */.jw.Packets);};return/*#__PURE__*/react.createElement(Tooltip/* default */.Z,{title:filtered?"remove filter "+chipFilter:"add filter "+chipFilter},/*#__PURE__*/react.createElement("span",null,/*#__PURE__*/react.createElement(Chip/* default */.Z,{onClick:handleClick,className:className,size:"small",label:(0,KindIcon/* kindName */.QD)(kind),icon:icon})));}
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Category.js
var Category = __webpack_require__(30603);
;// CONCATENATED MODULE: ./src/components/PacketMembersChip.tsx
// tslint:disable-next-line: no-submodule-imports
// tslint:disable-next-line: no-submodule-imports match-default-export-name
function PacketMembersChip(props){var{members,className,spec}=props;if(!(members!==null&&members!==void 0&&members.length))return null;var label=spec===null||spec===void 0?void 0:spec.packFormat;var title="pack format";return/*#__PURE__*/react.createElement(Tooltip/* default */.Z,{title:title},/*#__PURE__*/react.createElement(Chip/* default */.Z,{style:{textDecoration:"none"},href:"/reference/pack-format/",component:"a",clickable:true,className:className,size:"small",icon:/*#__PURE__*/react.createElement(Category/* default */.Z,null),label:label}));}
// EXTERNAL MODULE: ./src/components/ui/Markdown.tsx
var Markdown = __webpack_require__(22129);
// EXTERNAL MODULE: ./node_modules/@mui/material/Tabs/Tabs.js + 8 modules
var Tabs = __webpack_require__(44656);
// EXTERNAL MODULE: ./node_modules/@mui/material/Tab/Tab.js + 1 modules
var Tab = __webpack_require__(62640);
// EXTERNAL MODULE: ./src/components/ui/TabPanel.tsx
var TabPanel = __webpack_require__(8760);
// EXTERNAL MODULE: ./src/components/ui/Snippet.tsx
var Snippet = __webpack_require__(73546);
// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/spectool/jdspec.ts
var jdspec = __webpack_require__(18763);
// EXTERNAL MODULE: ./src/components/ui/PaperBox.tsx
var PaperBox = __webpack_require__(91945);
;// CONCATENATED MODULE: ./src/components/specification/PacketSpecificationSource.tsx
function PacketSpecificationSource(props){var _packetInfo$fields;var{serviceClass,packetInfo}=props;var{0:tab,1:setTab}=(0,react.useState)(0);var info=(0,jdom_spec/* serviceSpecificationFromClassIdentifier */.d5)(serviceClass);var handleTabChange=(event,newValue)=>{setTab(newValue);};// TODO: render commands
if(!info||!(packetInfo!==null&&packetInfo!==void 0&&(_packetInfo$fields=packetInfo.fields)!==null&&_packetInfo$fields!==void 0&&_packetInfo$fields.length)||!((0,jdom_spec/* isRegister */.x5)(packetInfo)||(0,jdom_spec/* isCommand */.ao)(packetInfo)||(0,jdom_spec/* isEvent */.cO)(packetInfo)))return null;var index=0;return/*#__PURE__*/react.createElement(PaperBox/* default */.Z,null,/*#__PURE__*/react.createElement(Tabs/* default */.Z,{value:tab,onChange:handleTabChange,"aria-label":"View specification formats"},["TypeScript"].filter(n=>!!n).map(n=>/*#__PURE__*/react.createElement(Tab/* default */.Z,{key:n,label:n}))),/*#__PURE__*/react.createElement(TabPanel/* default */.Z,{value:tab,index:index++},/*#__PURE__*/react.createElement(Snippet/* default */.Z,{value:()=>(0,jdspec/* packInfo */.p6)(info,packetInfo,{isStatic:false,useBooleans:false,useJDOM:true}).buffers,mode:"typescript"})));}
;// CONCATENATED MODULE: ./src/components/specification/PacketSpecification.tsx
// tslint:disable-next-line: no-submodule-imports
// tslint:disable-next-line: no-submodule-imports
var PacketSpecification_PREFIX="PacketSpecification";var PacketSpecification_classes={root:PacketSpecification_PREFIX+"root",field:PacketSpecification_PREFIX+"field",chip:PacketSpecification_PREFIX+"chip"};var Root=(0,styled/* default */.ZP)("div")(_ref=>{var{theme}=_ref;return{["&."+PacketSpecification_classes.root]:{marginBottom:theme.spacing(1)},["& ."+PacketSpecification_classes.field]:{"& > div":{verticalAlign:"middle"}},["& ."+PacketSpecification_classes.chip]:{margin:theme.spacing(0.5)}};});function MemberType(props){var{member}=props;var helperText=(0,pretty/* prettyMemberUnit */.Zn)(member,true);return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement("li",{className:PacketSpecification_classes.field},member.name!=="_"&&member.name+": ",/*#__PURE__*/react.createElement("code",null,helperText)));}function MembersType(props){var{members,title}=props;var repeatIndex=members.findIndex(m=>!!m.startRepeats);if(repeatIndex<0)repeatIndex=members.length;var beforeRepeat=members.slice(0,repeatIndex);var afterRepeat=members.slice(repeatIndex);return/*#__PURE__*/react.createElement(react.Fragment,null,!!title&&/*#__PURE__*/react.createElement("h4",null,title),!!beforeRepeat.length&&/*#__PURE__*/react.createElement("ul",null,beforeRepeat.map(member=>/*#__PURE__*/react.createElement(MemberType,{key:member.name,member:member}))),!!afterRepeat.length&&/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement("h5",null,"starts repeating"),/*#__PURE__*/react.createElement("ul",null,afterRepeat.map(member=>/*#__PURE__*/react.createElement(MemberType,{key:member.name,member:member})))));}function PacketSpecification(props){var{serviceClass,packetInfo,reportInfo,pipeReportInfo,showDevices}=props;if(!packetInfo)return/*#__PURE__*/react.createElement(Alert/* default */.Z,{severity:"error"},"Unknown member "+serviceClass.toString(16)+":"+packetInfo.identifier);var{fields}=packetInfo;var isCmd=(0,jdom_spec/* isCommand */.ao)(packetInfo);return/*#__PURE__*/react.createElement(Root,{className:PacketSpecification_classes.root},/*#__PURE__*/react.createElement("h3",{id:packetInfo.kind+":"+packetInfo.identifier},packetInfo.name,/*#__PURE__*/react.createElement(PacketMembersChip,{spec:packetInfo,className:PacketSpecification_classes.chip,members:packetInfo.fields}),packetInfo.identifier!==undefined&&/*#__PURE__*/react.createElement(IDChip/* default */.Z,{className:PacketSpecification_classes.chip,id:packetInfo.identifier,filter:"pkt:0x"+packetInfo.identifier.toString(16)}),/*#__PURE__*/react.createElement(KindChip,{className:PacketSpecification_classes.chip,kind:packetInfo.kind}),packetInfo.optional&&/*#__PURE__*/react.createElement(Chip/* default */.Z,{className:PacketSpecification_classes.chip,size:"small",label:"optional"}),packetInfo.derived&&/*#__PURE__*/react.createElement(Chip/* default */.Z,{className:PacketSpecification_classes.chip,size:"small",label:"derived"})),/*#__PURE__*/react.createElement(Markdown/* default */.Z,{source:packetInfo.description}),!!fields.length&&/*#__PURE__*/react.createElement(MembersType,{members:fields,title:isCmd&&"Arguments"}),!!reportInfo&&/*#__PURE__*/react.createElement(MembersType,{members:reportInfo.fields,title:"Report"}),!!pipeReportInfo&&/*#__PURE__*/react.createElement(MembersType,{members:pipeReportInfo.fields,title:"Pipe report"}),/*#__PURE__*/react.createElement(PacketSpecificationSource,{serviceClass:serviceClass,packetInfo:packetInfo,reportInfo:reportInfo}),showDevices&&(0,jdom_spec/* isCommand */.ao)(packetInfo)&&/*#__PURE__*/react.createElement(DeviceList,{serviceClass:serviceClass,commandIdentifier:packetInfo.identifier}),showDevices&&(0,jdom_spec/* isRegister */.x5)(packetInfo)&&/*#__PURE__*/react.createElement(DeviceList,{serviceClass:serviceClass,registerIdentifiers:[packetInfo.identifier]}),showDevices&&(0,jdom_spec/* isEvent */.cO)(packetInfo)&&/*#__PURE__*/react.createElement(DeviceList,{serviceClass:serviceClass,eventIdentifiers:[packetInfo.identifier]}));}

/***/ }),

/***/ 43897:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export StatusAlert */
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _ui_Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46259);
function StatusAlert(props){var{specification}=props;switch(specification===null||specification===void 0?void 0:specification.status){case"deprecated":return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{severity:"error"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,null,"Service deprecated"),"This service should not be added to new modules and might not be supported in future releases.");case"experimental":return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{severity:"info"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,null,"Experimental service"),"This service specification may change in the future.");default:return null;}}var ServiceSpecificationStatusAlert=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(StatusAlert);/* harmony default export */ __webpack_exports__["Z"] = (ServiceSpecificationStatusAlert);

/***/ }),

/***/ 22129:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Markdown; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _Suspense__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19811);
var SuspensedMarkdown=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(()=>__webpack_require__.e(/* import() */ 8588).then(__webpack_require__.bind(__webpack_require__, 98588)));function Markdown(props){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Suspense__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SuspensedMarkdown,props));}

/***/ }),

/***/ 73546:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Snippet; }
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2658);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _CodeBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25373);
function Snippet(props){var{value,mode,download,url,caption,actions,copy}=props;var v=typeof value==="function"?value():value;var className=mode&&"language-"+(mode==="sts"?"ts":mode);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CodeBlock__WEBPACK_IMPORTED_MODULE_1__["default"],{className:className,downloadName:download,downloadText:download&&v,actions:actions,url:url,copy:copy},v),caption&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{variant:"caption"},caption));}

/***/ }),

/***/ 67768:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useEventCount; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3964);
function useEventCount(event){var{0:count,1:setCount}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((event===null||event===void 0?void 0:event.count)||0);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>event===null||event===void 0?void 0:event.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .CHANGE */ .Ver,()=>{setCount(event.count);}),[event]);return count;}

/***/ })

}]);
//# sourceMappingURL=de590f55fa2f17e49ed8680dc5a022fe834f3017-e61a95d235d0783332d6.js.map