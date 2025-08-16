"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1216,9927],{

/***/ 49161:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ CardActions_CardActions; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(94780);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(90948);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js
var useThemeProps = __webpack_require__(71657);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(1588);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(34867);
;// CONCATENATED MODULE: ./node_modules/@mui/material/CardActions/cardActionsClasses.js


function getCardActionsUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiCardActions', slot);
}
const cardActionsClasses = (0,generateUtilityClasses/* default */.Z)('MuiCardActions', ['root', 'spacing']);
/* harmony default export */ var CardActions_cardActionsClasses = ((/* unused pure expression or super */ null && (cardActionsClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/CardActions/CardActions.js


const _excluded = ["disableSpacing", "className"];








const useUtilityClasses = ownerState => {
  const {
    classes,
    disableSpacing
  } = ownerState;
  const slots = {
    root: ['root', !disableSpacing && 'spacing']
  };
  return (0,composeClasses/* default */.Z)(slots, getCardActionsUtilityClass, classes);
};
const CardActionsRoot = (0,styled/* default */.ZP)('div', {
  name: 'MuiCardActions',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, !ownerState.disableSpacing && styles.spacing];
  }
})(({
  ownerState
}) => (0,esm_extends/* default */.Z)({
  display: 'flex',
  alignItems: 'center',
  padding: 8
}, !ownerState.disableSpacing && {
  '& > :not(:first-of-type)': {
    marginLeft: 8
  }
}));
const CardActions = /*#__PURE__*/react.forwardRef(function CardActions(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiCardActions'
  });
  const {
      disableSpacing = false,
      className
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);
  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    disableSpacing
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(CardActionsRoot, (0,esm_extends/* default */.Z)({
    className: (0,clsx_m/* default */.Z)(classes.root, className),
    ownerState: ownerState,
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ var CardActions_CardActions = (CardActions);

/***/ }),

/***/ 91216:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ STLModelCard; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@mui/base/NoSsr/NoSsr.js
var NoSsr = __webpack_require__(79104);
// EXTERNAL MODULE: ./node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(65295);
// EXTERNAL MODULE: ./node_modules/@mui/material/CardHeader/CardHeader.js + 1 modules
var CardHeader = __webpack_require__(18515);
// EXTERNAL MODULE: ./node_modules/@mui/material/CardMedia/CardMedia.js + 1 modules
var CardMedia = __webpack_require__(54962);
// EXTERNAL MODULE: ./node_modules/@mui/material/CardActions/CardActions.js + 1 modules
var CardActions = __webpack_require__(49161);
// EXTERNAL MODULE: ./node_modules/@mui/material/Button/Button.js + 2 modules
var Button = __webpack_require__(76914);
// EXTERNAL MODULE: ./node_modules/@react-three/fiber/dist/index-73d51a81.esm.js + 2 modules
var index_73d51a81_esm = __webpack_require__(39826);
// EXTERNAL MODULE: ./node_modules/three/build/three.module.js
var three_module = __webpack_require__(99477);
;// CONCATENATED MODULE: ./node_modules/three/examples/jsm/loaders/STLLoader.js


/**
 * Description: A THREE loader for STL ASCII files, as created by Solidworks and other CAD programs.
 *
 * Supports both binary and ASCII encoded files, with automatic detection of type.
 *
 * The loader returns a non-indexed buffer geometry.
 *
 * Limitations:
 *  Binary decoding supports "Magics" color format (http://en.wikipedia.org/wiki/STL_(file_format)#Color_in_binary_STL).
 *  There is perhaps some question as to how valid it is to always assume little-endian-ness.
 *  ASCII decoding assumes file is UTF-8.
 *
 * Usage:
 *  const loader = new STLLoader();
 *  loader.load( './models/stl/slotted_disk.stl', function ( geometry ) {
 *    scene.add( new THREE.Mesh( geometry ) );
 *  });
 *
 * For binary STLs geometry might contain colors for vertices. To use it:
 *  // use the same code to load STL as above
 *  if (geometry.hasColors) {
 *    material = new THREE.MeshPhongMaterial({ opacity: geometry.alpha, vertexColors: true });
 *  } else { .... }
 *  const mesh = new THREE.Mesh( geometry, material );
 *
 * For ASCII STLs containing multiple solids, each solid is assigned to a different group.
 * Groups can be used to assign a different color by defining an array of materials with the same length of
 * geometry.groups and passing it to the Mesh constructor:
 *
 * const mesh = new THREE.Mesh( geometry, material );
 *
 * For example:
 *
 *  const materials = [];
 *  const nGeometryGroups = geometry.groups.length;
 *
 *  const colorMap = ...; // Some logic to index colors.
 *
 *  for (let i = 0; i < nGeometryGroups; i++) {
 *
 *		const material = new THREE.MeshPhongMaterial({
 *			color: colorMap[i],
 *			wireframe: false
 *		});
 *
 *  }
 *
 *  materials.push(material);
 *  const mesh = new THREE.Mesh(geometry, materials);
 */


class STLLoader extends three_module.Loader {

	constructor( manager ) {

		super( manager );

	}

	load( url, onLoad, onProgress, onError ) {

		const scope = this;

		const loader = new three_module.FileLoader( this.manager );
		loader.setPath( this.path );
		loader.setResponseType( 'arraybuffer' );
		loader.setRequestHeader( this.requestHeader );
		loader.setWithCredentials( this.withCredentials );

		loader.load( url, function ( text ) {

			try {

				onLoad( scope.parse( text ) );

			} catch ( e ) {

				if ( onError ) {

					onError( e );

				} else {

					console.error( e );

				}

				scope.manager.itemError( url );

			}

		}, onProgress, onError );

	}

	parse( data ) {

		function isBinary( data ) {

			const reader = new DataView( data );
			const face_size = ( 32 / 8 * 3 ) + ( ( 32 / 8 * 3 ) * 3 ) + ( 16 / 8 );
			const n_faces = reader.getUint32( 80, true );
			const expect = 80 + ( 32 / 8 ) + ( n_faces * face_size );

			if ( expect === reader.byteLength ) {

				return true;

			}

			// An ASCII STL data must begin with 'solid ' as the first six bytes.
			// However, ASCII STLs lacking the SPACE after the 'd' are known to be
			// plentiful.  So, check the first 5 bytes for 'solid'.

			// Several encodings, such as UTF-8, precede the text with up to 5 bytes:
			// https://en.wikipedia.org/wiki/Byte_order_mark#Byte_order_marks_by_encoding
			// Search for "solid" to start anywhere after those prefixes.

			// US-ASCII ordinal values for 's', 'o', 'l', 'i', 'd'

			const solid = [ 115, 111, 108, 105, 100 ];

			for ( let off = 0; off < 5; off ++ ) {

				// If "solid" text is matched to the current offset, declare it to be an ASCII STL.

				if ( matchDataViewAt( solid, reader, off ) ) return false;

			}

			// Couldn't find "solid" text at the beginning; it is binary STL.

			return true;

		}

		function matchDataViewAt( query, reader, offset ) {

			// Check if each byte in query matches the corresponding byte from the current offset

			for ( let i = 0, il = query.length; i < il; i ++ ) {

				if ( query[ i ] !== reader.getUint8( offset + i ) ) return false;

			}

			return true;

		}

		function parseBinary( data ) {

			const reader = new DataView( data );
			const faces = reader.getUint32( 80, true );

			let r, g, b, hasColors = false, colors;
			let defaultR, defaultG, defaultB, alpha;

			// process STL header
			// check for default color in header ("COLOR=rgba" sequence).

			for ( let index = 0; index < 80 - 10; index ++ ) {

				if ( ( reader.getUint32( index, false ) == 0x434F4C4F /*COLO*/ ) &&
					( reader.getUint8( index + 4 ) == 0x52 /*'R'*/ ) &&
					( reader.getUint8( index + 5 ) == 0x3D /*'='*/ ) ) {

					hasColors = true;
					colors = new Float32Array( faces * 3 * 3 );

					defaultR = reader.getUint8( index + 6 ) / 255;
					defaultG = reader.getUint8( index + 7 ) / 255;
					defaultB = reader.getUint8( index + 8 ) / 255;
					alpha = reader.getUint8( index + 9 ) / 255;

				}

			}

			const dataOffset = 84;
			const faceLength = 12 * 4 + 2;

			const geometry = new three_module.BufferGeometry();

			const vertices = new Float32Array( faces * 3 * 3 );
			const normals = new Float32Array( faces * 3 * 3 );

			for ( let face = 0; face < faces; face ++ ) {

				const start = dataOffset + face * faceLength;
				const normalX = reader.getFloat32( start, true );
				const normalY = reader.getFloat32( start + 4, true );
				const normalZ = reader.getFloat32( start + 8, true );

				if ( hasColors ) {

					const packedColor = reader.getUint16( start + 48, true );

					if ( ( packedColor & 0x8000 ) === 0 ) {

						// facet has its own unique color

						r = ( packedColor & 0x1F ) / 31;
						g = ( ( packedColor >> 5 ) & 0x1F ) / 31;
						b = ( ( packedColor >> 10 ) & 0x1F ) / 31;

					} else {

						r = defaultR;
						g = defaultG;
						b = defaultB;

					}

				}

				for ( let i = 1; i <= 3; i ++ ) {

					const vertexstart = start + i * 12;
					const componentIdx = ( face * 3 * 3 ) + ( ( i - 1 ) * 3 );

					vertices[ componentIdx ] = reader.getFloat32( vertexstart, true );
					vertices[ componentIdx + 1 ] = reader.getFloat32( vertexstart + 4, true );
					vertices[ componentIdx + 2 ] = reader.getFloat32( vertexstart + 8, true );

					normals[ componentIdx ] = normalX;
					normals[ componentIdx + 1 ] = normalY;
					normals[ componentIdx + 2 ] = normalZ;

					if ( hasColors ) {

						colors[ componentIdx ] = r;
						colors[ componentIdx + 1 ] = g;
						colors[ componentIdx + 2 ] = b;

					}

				}

			}

			geometry.setAttribute( 'position', new three_module.BufferAttribute( vertices, 3 ) );
			geometry.setAttribute( 'normal', new three_module.BufferAttribute( normals, 3 ) );

			if ( hasColors ) {

				geometry.setAttribute( 'color', new three_module.BufferAttribute( colors, 3 ) );
				geometry.hasColors = true;
				geometry.alpha = alpha;

			}

			return geometry;

		}

		function parseASCII( data ) {

			const geometry = new three_module.BufferGeometry();
			const patternSolid = /solid([\s\S]*?)endsolid/g;
			const patternFace = /facet([\s\S]*?)endfacet/g;
			let faceCounter = 0;

			const patternFloat = /[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source;
			const patternVertex = new RegExp( 'vertex' + patternFloat + patternFloat + patternFloat, 'g' );
			const patternNormal = new RegExp( 'normal' + patternFloat + patternFloat + patternFloat, 'g' );

			const vertices = [];
			const normals = [];

			const normal = new three_module.Vector3();

			let result;

			let groupCount = 0;
			let startVertex = 0;
			let endVertex = 0;

			while ( ( result = patternSolid.exec( data ) ) !== null ) {

				startVertex = endVertex;

				const solid = result[ 0 ];

				while ( ( result = patternFace.exec( solid ) ) !== null ) {

					let vertexCountPerFace = 0;
					let normalCountPerFace = 0;

					const text = result[ 0 ];

					while ( ( result = patternNormal.exec( text ) ) !== null ) {

						normal.x = parseFloat( result[ 1 ] );
						normal.y = parseFloat( result[ 2 ] );
						normal.z = parseFloat( result[ 3 ] );
						normalCountPerFace ++;

					}

					while ( ( result = patternVertex.exec( text ) ) !== null ) {

						vertices.push( parseFloat( result[ 1 ] ), parseFloat( result[ 2 ] ), parseFloat( result[ 3 ] ) );
						normals.push( normal.x, normal.y, normal.z );
						vertexCountPerFace ++;
						endVertex ++;

					}

					// every face have to own ONE valid normal

					if ( normalCountPerFace !== 1 ) {

						console.error( 'THREE.STLLoader: Something isn\'t right with the normal of face number ' + faceCounter );

					}

					// each face have to own THREE valid vertices

					if ( vertexCountPerFace !== 3 ) {

						console.error( 'THREE.STLLoader: Something isn\'t right with the vertices of face number ' + faceCounter );

					}

					faceCounter ++;

				}

				const start = startVertex;
				const count = endVertex - startVertex;

				geometry.addGroup( start, count, groupCount );
				groupCount ++;

			}

			geometry.setAttribute( 'position', new three_module.Float32BufferAttribute( vertices, 3 ) );
			geometry.setAttribute( 'normal', new three_module.Float32BufferAttribute( normals, 3 ) );

			return geometry;

		}

		function ensureString( buffer ) {

			if ( typeof buffer !== 'string' ) {

				return new TextDecoder().decode( buffer );

			}

			return buffer;

		}

		function ensureBinary( buffer ) {

			if ( typeof buffer === 'string' ) {

				const array_buffer = new Uint8Array( buffer.length );
				for ( let i = 0; i < buffer.length; i ++ ) {

					array_buffer[ i ] = buffer.charCodeAt( i ) & 0xff; // implicitly assumes little-endian

				}

				return array_buffer.buffer || array_buffer;

			} else {

				return buffer;

			}

		}

		// start

		const binData = ensureBinary( data );

		return isBinary( binData ) ? parseBinary( binData ) : parseASCII( ensureString( data ) );

	}

}



;// CONCATENATED MODULE: ./src/components/models/STLModel.tsx
function STLModel(props){var{url,color}=props;var obj=(0,index_73d51a81_esm.D)(STLLoader,url);return/*#__PURE__*/react.createElement("mesh",null,/*#__PURE__*/react.createElement("primitive",{object:obj,attach:"geometry"}),/*#__PURE__*/react.createElement("meshStandardMaterial",{color:color||"green"}));}
// EXTERNAL MODULE: ./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js + 2 modules
var react_three_fiber_esm = __webpack_require__(45953);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
;// CONCATENATED MODULE: ./node_modules/three-stdlib/loaders/RGBELoader.js


// http://en.wikipedia.org/wiki/RGBE_image_format

class RGBELoader extends three_module.DataTextureLoader {
  constructor(manager) {
    super(manager);
    this.type = three_module.HalfFloatType;
  } // adapted from http://www.graphics.cornell.edu/~bjw/rgbe.html


  parse(buffer) {
    const
    /* return codes for rgbe routines */
    //RGBE_RETURN_SUCCESS = 0,
    RGBE_RETURN_FAILURE = -1,

    /* default error routine.  change this to change error handling */
    rgbe_read_error = 1,
          rgbe_write_error = 2,
          rgbe_format_error = 3,
          rgbe_memory_error = 4,
          rgbe_error = function (rgbe_error_code, msg) {
      switch (rgbe_error_code) {
        case rgbe_read_error:
          console.error('THREE.RGBELoader Read Error: ' + (msg || ''));
          break;

        case rgbe_write_error:
          console.error('THREE.RGBELoader Write Error: ' + (msg || ''));
          break;

        case rgbe_format_error:
          console.error('THREE.RGBELoader Bad File Format: ' + (msg || ''));
          break;

        default:
        case rgbe_memory_error:
          console.error('THREE.RGBELoader: Error: ' + (msg || ''));
      }

      return RGBE_RETURN_FAILURE;
    },

    /* offsets to red, green, and blue components in a data (float) pixel */
    //RGBE_DATA_RED = 0,
    //RGBE_DATA_GREEN = 1,
    //RGBE_DATA_BLUE = 2,

    /* number of floats per pixel, use 4 since stored in rgba image format */
    //RGBE_DATA_SIZE = 4,

    /* flags indicating which fields in an rgbe_header_info are valid */
    RGBE_VALID_PROGRAMTYPE = 1,
          RGBE_VALID_FORMAT = 2,
          RGBE_VALID_DIMENSIONS = 4,
          NEWLINE = '\n',
          fgets = function (buffer, lineLimit, consume) {
      const chunkSize = 128;
      lineLimit = !lineLimit ? 1024 : lineLimit;
      let p = buffer.pos,
          i = -1,
          len = 0,
          s = '',
          chunk = String.fromCharCode.apply(null, new Uint16Array(buffer.subarray(p, p + chunkSize)));

      while (0 > (i = chunk.indexOf(NEWLINE)) && len < lineLimit && p < buffer.byteLength) {
        s += chunk;
        len += chunk.length;
        p += chunkSize;
        chunk += String.fromCharCode.apply(null, new Uint16Array(buffer.subarray(p, p + chunkSize)));
      }

      if (-1 < i) {
        /*for (i=l-1; i>=0; i--) {
        byteCode = m.charCodeAt(i);
        if (byteCode > 0x7f && byteCode <= 0x7ff) byteLen++;
        else if (byteCode > 0x7ff && byteCode <= 0xffff) byteLen += 2;
        if (byteCode >= 0xDC00 && byteCode <= 0xDFFF) i--; //trail surrogate
        }*/
        if (false !== consume) buffer.pos += len + i + 1;
        return s + chunk.slice(0, i);
      }

      return false;
    },

    /* minimal header reading.  modify if you want to parse more information */
    RGBE_ReadHeader = function (buffer) {
      // regexes to parse header info fields
      const magic_token_re = /^#\?(\S+)/,
            gamma_re = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,
            exposure_re = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,
            format_re = /^\s*FORMAT=(\S+)\s*$/,
            dimensions_re = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,
            // RGBE format header struct
      header = {
        valid: 0
        /* indicate which fields are valid */
        ,
        string: ''
        /* the actual header string */
        ,
        comments: ''
        /* comments found in header */
        ,
        programtype: 'RGBE'
        /* listed at beginning of file to identify it after "#?". defaults to "RGBE" */
        ,
        format: ''
        /* RGBE format, default 32-bit_rle_rgbe */
        ,
        gamma: 1.0
        /* image has already been gamma corrected with given gamma. defaults to 1.0 (no correction) */
        ,
        exposure: 1.0
        /* a value of 1.0 in an image corresponds to <exposure> watts/steradian/m^2. defaults to 1.0 */
        ,
        width: 0,
        height: 0
        /* image dimensions, width/height */

      };
      let line, match;

      if (buffer.pos >= buffer.byteLength || !(line = fgets(buffer))) {
        return rgbe_error(rgbe_read_error, 'no header found');
      }
      /* if you want to require the magic token then uncomment the next line */


      if (!(match = line.match(magic_token_re))) {
        return rgbe_error(rgbe_format_error, 'bad initial token');
      }

      header.valid |= RGBE_VALID_PROGRAMTYPE;
      header.programtype = match[1];
      header.string += line + '\n';

      while (true) {
        line = fgets(buffer);
        if (false === line) break;
        header.string += line + '\n';

        if ('#' === line.charAt(0)) {
          header.comments += line + '\n';
          continue; // comment line
        }

        if (match = line.match(gamma_re)) {
          header.gamma = parseFloat(match[1]);
        }

        if (match = line.match(exposure_re)) {
          header.exposure = parseFloat(match[1]);
        }

        if (match = line.match(format_re)) {
          header.valid |= RGBE_VALID_FORMAT;
          header.format = match[1]; //'32-bit_rle_rgbe';
        }

        if (match = line.match(dimensions_re)) {
          header.valid |= RGBE_VALID_DIMENSIONS;
          header.height = parseInt(match[1], 10);
          header.width = parseInt(match[2], 10);
        }

        if (header.valid & RGBE_VALID_FORMAT && header.valid & RGBE_VALID_DIMENSIONS) break;
      }

      if (!(header.valid & RGBE_VALID_FORMAT)) {
        return rgbe_error(rgbe_format_error, 'missing format specifier');
      }

      if (!(header.valid & RGBE_VALID_DIMENSIONS)) {
        return rgbe_error(rgbe_format_error, 'missing image size specifier');
      }

      return header;
    },
          RGBE_ReadPixels_RLE = function (buffer, w, h) {
      const scanline_width = w;

      if ( // run length encoding is not allowed so read flat
      scanline_width < 8 || scanline_width > 0x7fff || // this file is not run length encoded
      2 !== buffer[0] || 2 !== buffer[1] || buffer[2] & 0x80) {
        // return the flat buffer
        return new Uint8Array(buffer);
      }

      if (scanline_width !== (buffer[2] << 8 | buffer[3])) {
        return rgbe_error(rgbe_format_error, 'wrong scanline width');
      }

      const data_rgba = new Uint8Array(4 * w * h);

      if (!data_rgba.length) {
        return rgbe_error(rgbe_memory_error, 'unable to allocate buffer space');
      }

      let offset = 0,
          pos = 0;
      const ptr_end = 4 * scanline_width;
      const rgbeStart = new Uint8Array(4);
      const scanline_buffer = new Uint8Array(ptr_end);
      let num_scanlines = h; // read in each successive scanline

      while (num_scanlines > 0 && pos < buffer.byteLength) {
        if (pos + 4 > buffer.byteLength) {
          return rgbe_error(rgbe_read_error);
        }

        rgbeStart[0] = buffer[pos++];
        rgbeStart[1] = buffer[pos++];
        rgbeStart[2] = buffer[pos++];
        rgbeStart[3] = buffer[pos++];

        if (2 != rgbeStart[0] || 2 != rgbeStart[1] || (rgbeStart[2] << 8 | rgbeStart[3]) != scanline_width) {
          return rgbe_error(rgbe_format_error, 'bad rgbe scanline format');
        } // read each of the four channels for the scanline into the buffer
        // first red, then green, then blue, then exponent


        let ptr = 0,
            count;

        while (ptr < ptr_end && pos < buffer.byteLength) {
          count = buffer[pos++];
          const isEncodedRun = count > 128;
          if (isEncodedRun) count -= 128;

          if (0 === count || ptr + count > ptr_end) {
            return rgbe_error(rgbe_format_error, 'bad scanline data');
          }

          if (isEncodedRun) {
            // a (encoded) run of the same value
            const byteValue = buffer[pos++];

            for (let i = 0; i < count; i++) {
              scanline_buffer[ptr++] = byteValue;
            } //ptr += count;

          } else {
            // a literal-run
            scanline_buffer.set(buffer.subarray(pos, pos + count), ptr);
            ptr += count;
            pos += count;
          }
        } // now convert data from buffer into rgba
        // first red, then green, then blue, then exponent (alpha)


        const l = scanline_width; //scanline_buffer.byteLength;

        for (let i = 0; i < l; i++) {
          let off = 0;
          data_rgba[offset] = scanline_buffer[i + off];
          off += scanline_width; //1;

          data_rgba[offset + 1] = scanline_buffer[i + off];
          off += scanline_width; //1;

          data_rgba[offset + 2] = scanline_buffer[i + off];
          off += scanline_width; //1;

          data_rgba[offset + 3] = scanline_buffer[i + off];
          offset += 4;
        }

        num_scanlines--;
      }

      return data_rgba;
    };

    const RGBEByteToRGBFloat = function (sourceArray, sourceOffset, destArray, destOffset) {
      const e = sourceArray[sourceOffset + 3];
      const scale = Math.pow(2.0, e - 128.0) / 255.0;
      destArray[destOffset + 0] = sourceArray[sourceOffset + 0] * scale;
      destArray[destOffset + 1] = sourceArray[sourceOffset + 1] * scale;
      destArray[destOffset + 2] = sourceArray[sourceOffset + 2] * scale;
      destArray[destOffset + 3] = 1;
    };

    const RGBEByteToRGBHalf = function (sourceArray, sourceOffset, destArray, destOffset) {
      const e = sourceArray[sourceOffset + 3];
      const scale = Math.pow(2.0, e - 128.0) / 255.0; // clamping to 65504, the maximum representable value in float16

      destArray[destOffset + 0] = three_module.DataUtils.toHalfFloat(Math.min(sourceArray[sourceOffset + 0] * scale, 65504));
      destArray[destOffset + 1] = three_module.DataUtils.toHalfFloat(Math.min(sourceArray[sourceOffset + 1] * scale, 65504));
      destArray[destOffset + 2] = three_module.DataUtils.toHalfFloat(Math.min(sourceArray[sourceOffset + 2] * scale, 65504));
      destArray[destOffset + 3] = three_module.DataUtils.toHalfFloat(1);
    };

    const byteArray = new Uint8Array(buffer);
    byteArray.pos = 0;
    const rgbe_header_info = RGBE_ReadHeader(byteArray);

    if (RGBE_RETURN_FAILURE !== rgbe_header_info) {
      const w = rgbe_header_info.width,
            h = rgbe_header_info.height,
            image_rgba_data = RGBE_ReadPixels_RLE(byteArray.subarray(byteArray.pos), w, h);

      if (RGBE_RETURN_FAILURE !== image_rgba_data) {
        let data, type;
        let numElements;

        switch (this.type) {
          case three_module.FloatType:
            numElements = image_rgba_data.length / 4;
            const floatArray = new Float32Array(numElements * 4);

            for (let j = 0; j < numElements; j++) {
              RGBEByteToRGBFloat(image_rgba_data, j * 4, floatArray, j * 4);
            }

            data = floatArray;
            type = three_module.FloatType;
            break;

          case three_module.HalfFloatType:
            numElements = image_rgba_data.length / 4;
            const halfArray = new Uint16Array(numElements * 4);

            for (let j = 0; j < numElements; j++) {
              RGBEByteToRGBHalf(image_rgba_data, j * 4, halfArray, j * 4);
            }

            data = halfArray;
            type = three_module.HalfFloatType;
            break;

          default:
            console.error('THREE.RGBELoader: unsupported type: ', this.type);
            break;
        }

        return {
          width: w,
          height: h,
          data: data,
          header: rgbe_header_info.string,
          gamma: rgbe_header_info.gamma,
          exposure: rgbe_header_info.exposure,
          type: type
        };
      }
    }

    return null;
  }

  setDataType(value) {
    this.type = value;
    return this;
  }

  load(url, onLoad, onProgress, onError) {
    function onLoadCallback(texture, texData) {
      switch (texture.type) {
        case three_module.FloatType:
        case three_module.HalfFloatType:
          texture.encoding = three_module.LinearEncoding;
          texture.minFilter = three_module.LinearFilter;
          texture.magFilter = three_module.LinearFilter;
          texture.generateMipmaps = false;
          texture.flipY = true;
          break;
      }

      if (onLoad) onLoad(texture, texData);
    }

    return super.load(url, onLoadCallback, onProgress, onError);
  }

}



;// CONCATENATED MODULE: ./node_modules/three-stdlib/objects/GroundProjectedEnv.js


const isCubeTexture = def => def && def.isCubeTexture;

class GroundProjectedEnv extends three_module.Mesh {
  constructor(texture, options) {
    var _ref, _texture$image$;

    const isCubeMap = isCubeTexture(texture);
    const w = (_ref = isCubeMap ? (_texture$image$ = texture.image[0]) === null || _texture$image$ === void 0 ? void 0 : _texture$image$.width : texture.image.width) != null ? _ref : 1024;
    const cubeSize = w / 4;

    const _lodMax = Math.floor(Math.log2(cubeSize));

    const _cubeSize = Math.pow(2, _lodMax);

    const width = 3 * Math.max(_cubeSize, 16 * 7);
    const height = 4 * _cubeSize;
    const defines = [isCubeMap ? '#define ENVMAP_TYPE_CUBE' : '', `#define CUBEUV_TEXEL_WIDTH ${1.0 / width}`, `#define CUBEUV_TEXEL_HEIGHT ${1.0 / height}`, `#define CUBEUV_MAX_MIP ${_lodMax}.0`];
    const vertexShader =
    /* glsl */
    `
        varying vec3 vWorldPosition;
        void main() 
        {
            vec4 worldPosition = ( modelMatrix * vec4( position, 1.0 ) );
            vWorldPosition = worldPosition.xyz;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
        `;
    const fragmentShader = defines.join('\n') +
    /* glsl */
    `
        #define ENVMAP_TYPE_CUBE_UV
        varying vec3 vWorldPosition;
        uniform float radius;
        uniform float height;
        uniform float angle;
        #ifdef ENVMAP_TYPE_CUBE
            uniform samplerCube map;
        #else
            uniform sampler2D map;
        #endif
        // From: https://www.shadertoy.com/view/4tsBD7
        float diskIntersectWithBackFaceCulling( vec3 ro, vec3 rd, vec3 c, vec3 n, float r ) 
        {
            float d = dot ( rd, n );
            
            if( d > 0.0 ) { return 1e6; }
            
            vec3  o = ro - c;
            float t = - dot( n, o ) / d;
            vec3  q = o + rd * t;
            
            return ( dot( q, q ) < r * r ) ? t : 1e6;
        }
        // From: https://www.iquilezles.org/www/articles/intersectors/intersectors.htm
        float sphereIntersect( vec3 ro, vec3 rd, vec3 ce, float ra ) 
        {
            vec3 oc = ro - ce;
            float b = dot( oc, rd );
            float c = dot( oc, oc ) - ra * ra;
            float h = b * b - c;
            
            if( h < 0.0 ) { return -1.0; }
            
            h = sqrt( h );
            
            return - b + h;
        }
        vec3 project() 
        {
            vec3 p = normalize( vWorldPosition );
            vec3 camPos = cameraPosition;
            camPos.y -= height;
            float intersection = sphereIntersect( camPos, p, vec3( 0.0 ), radius );
            if( intersection > 0.0 ) {
                
                vec3 h = vec3( 0.0, - height, 0.0 );
                float intersection2 = diskIntersectWithBackFaceCulling( camPos, p, h, vec3( 0.0, 1.0, 0.0 ), radius );
                p = ( camPos + min( intersection, intersection2 ) * p ) / radius;
            } else {
                p = vec3( 0.0, 1.0, 0.0 );
            }
            return p;
        }
        #include <common>
        #include <cube_uv_reflection_fragment>
        void main() 
        {
            vec3 projectedWorldPosition = project();
            
            #ifdef ENVMAP_TYPE_CUBE
                vec3 outcolor = textureCube( map, projectedWorldPosition ).rgb;
            #else
                vec3 direction = normalize( projectedWorldPosition );
                vec2 uv = equirectUv( direction );
                vec3 outcolor = texture2D( map, uv ).rgb;
            #endif
            gl_FragColor = vec4( outcolor, 1.0 );
            #include <tonemapping_fragment>
            #include <encodings_fragment>
        }
        `;
    const uniforms = {
      map: {
        value: texture
      },
      height: {
        value: (options === null || options === void 0 ? void 0 : options.height) || 15
      },
      radius: {
        value: (options === null || options === void 0 ? void 0 : options.radius) || 100
      }
    };
    const geometry = new three_module.IcosahedronGeometry(1, 16);
    const material = new three_module.ShaderMaterial({
      uniforms,
      fragmentShader,
      vertexShader,
      side: three_module.DoubleSide
    });
    super(geometry, material);
  }

  set radius(radius) {
    this.material.uniforms.radius.value = radius;
  }

  get radius() {
    return this.material.uniforms.radius.value;
  }

  set height(height) {
    this.material.uniforms.height.value = height;
  }

  get height() {
    return this.material.uniforms.height.value;
  }

}



;// CONCATENATED MODULE: ./node_modules/@react-three/drei/helpers/environment-assets.js
const presetsObj = {
  sunset: 'venice/venice_sunset_1k.hdr',
  dawn: 'kiara/kiara_1_dawn_1k.hdr',
  night: 'dikhololo/dikhololo_night_1k.hdr',
  warehouse: 'empty-wharehouse/empty_warehouse_01_1k.hdr',
  forest: 'forrest-slope/forest_slope_1k.hdr',
  apartment: 'lebombo/lebombo_1k.hdr',
  studio: 'studio-small-3/studio_small_03_1k.hdr',
  city: 'potsdamer-platz/potsdamer_platz_1k.hdr',
  park: 'rooitou/rooitou_park_1k.hdr',
  lobby: 'st-fagans/st_fagans_interior_1k.hdr'
};



;// CONCATENATED MODULE: ./node_modules/@react-three/drei/core/Environment.js







const CUBEMAP_ROOT = 'https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/hdris/';

const isRef = obj => obj.current && obj.current.isScene;

const resolveScene = scene => isRef(scene) ? scene.current : scene;

function setEnvProps(background, scene, defaultScene, texture, blur = 0) {
  const target = resolveScene(scene || defaultScene);
  const oldbg = target.background;
  const oldenv = target.environment; // @ts-ignore

  const oldBlur = target.backgroundBlurriness || 0;
  if (background !== 'only') target.environment = texture;
  if (background) target.background = texture; // @ts-ignore

  if (background && target.backgroundBlurriness !== undefined) target.backgroundBlurriness = blur;
  return () => {
    if (background !== 'only') target.environment = oldenv;
    if (background) target.background = oldbg; // @ts-ignore

    if (background && target.backgroundBlurriness !== undefined) target.backgroundBlurriness = oldBlur;
  };
}

function EnvironmentMap({
  scene,
  background = false,
  blur,
  map
}) {
  const defaultScene = (0,index_73d51a81_esm.z)(state => state.scene);
  react.useLayoutEffect(() => {
    if (map) return setEnvProps(background, scene, defaultScene, map, blur);
  }, [defaultScene, scene, map, background, blur]);
  return null;
}
function useEnvironment({
  files = ['/px.png', '/nx.png', '/py.png', '/ny.png', '/pz.png', '/nz.png'],
  path = '',
  preset = undefined,
  encoding = undefined,
  extensions
}) {
  if (preset) {
    if (!(preset in presetsObj)) throw new Error('Preset must be one of: ' + Object.keys(presetsObj).join(', '));
    files = presetsObj[preset];
    path = CUBEMAP_ROOT;
  }

  const isCubeMap = Array.isArray(files);
  const loader = isCubeMap ? three_module.CubeTextureLoader : RGBELoader;
  const loaderResult = (0,index_73d51a81_esm.D)( // @ts-expect-error
  loader, isCubeMap ? [files] : files, loader => {
    loader.setPath(path);
    if (extensions) extensions(loader);
  });
  const texture = isCubeMap ? // @ts-ignore
  loaderResult[0] : loaderResult;
  texture.mapping = isCubeMap ? three_module.CubeReflectionMapping : three_module.EquirectangularReflectionMapping;
  texture.encoding = (encoding !== null && encoding !== void 0 ? encoding : isCubeMap) ? three_module.sRGBEncoding : three_module.LinearEncoding;
  return texture;
}
function EnvironmentCube({
  background = false,
  scene,
  blur,
  ...rest
}) {
  const texture = useEnvironment(rest);
  const defaultScene = (0,index_73d51a81_esm.z)(state => state.scene);
  react.useLayoutEffect(() => {
    return setEnvProps(background, scene, defaultScene, texture, blur);
  }, [texture, background, scene, defaultScene, blur]);
  return null;
}
function EnvironmentPortal({
  children,
  near = 1,
  far = 1000,
  resolution = 256,
  frames = 1,
  map,
  background = false,
  blur,
  scene,
  files,
  path,
  preset = undefined,
  extensions
}) {
  const gl = (0,index_73d51a81_esm.z)(state => state.gl);
  const defaultScene = (0,index_73d51a81_esm.z)(state => state.scene);
  const camera = react.useRef(null);
  const [virtualScene] = react.useState(() => new three_module.Scene());
  const fbo = react.useMemo(() => {
    const fbo = new three_module.WebGLCubeRenderTarget(resolution);
    fbo.texture.type = three_module.HalfFloatType;
    return fbo;
  }, [resolution]);
  react.useLayoutEffect(() => {
    if (frames === 1) camera.current.update(gl, virtualScene);
    return setEnvProps(background, scene, defaultScene, fbo.texture, blur);
  }, [children, virtualScene, fbo.texture, scene, defaultScene, background, frames, gl]);
  let count = 1;
  (0,index_73d51a81_esm.A)(() => {
    if (frames === Infinity || count < frames) {
      camera.current.update(gl, virtualScene);
      count++;
    }
  });
  return /*#__PURE__*/react.createElement(react.Fragment, null, (0,index_73d51a81_esm.g)( /*#__PURE__*/react.createElement(react.Fragment, null, children, /*#__PURE__*/react.createElement("cubeCamera", {
    ref: camera,
    args: [near, far, fbo]
  }), files || preset ? /*#__PURE__*/react.createElement(EnvironmentCube, {
    background: true,
    files: files,
    preset: preset,
    path: path,
    extensions: extensions
  }) : map ? /*#__PURE__*/react.createElement(EnvironmentMap, {
    background: true,
    map: map,
    extensions: extensions
  }) : null), virtualScene));
}

function EnvironmentGround(props) {
  var _props$ground, _props$ground2, _scale, _props$ground3;

  const textureDefault = useEnvironment(props);
  const texture = props.map || textureDefault;
  react.useMemo(() => (0,index_73d51a81_esm.e)({
    GroundProjectedEnvImpl: GroundProjectedEnv
  }), []);
  const args = react.useMemo(() => [texture], [texture]);
  const height = (_props$ground = props.ground) == null ? void 0 : _props$ground.height;
  const radius = (_props$ground2 = props.ground) == null ? void 0 : _props$ground2.radius;
  const scale = (_scale = (_props$ground3 = props.ground) == null ? void 0 : _props$ground3.scale) !== null && _scale !== void 0 ? _scale : 1000;
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(EnvironmentMap, (0,esm_extends/* default */.Z)({}, props, {
    map: texture
  })), /*#__PURE__*/react.createElement("groundProjectedEnvImpl", {
    args: args,
    scale: scale,
    height: height,
    radius: radius
  }));
}

function Environment(props) {
  return props.ground ? /*#__PURE__*/react.createElement(EnvironmentGround, props) : props.map ? /*#__PURE__*/react.createElement(EnvironmentMap, props) : props.children ? /*#__PURE__*/react.createElement(EnvironmentPortal, props) : /*#__PURE__*/react.createElement(EnvironmentCube, props);
}



;// CONCATENATED MODULE: ./node_modules/three-stdlib/shaders/HorizontalBlurShader.js
/**
 * Two pass Gaussian blur filter (horizontal and vertical blur shaders)
 * - described in http://www.gamerendering.com/2008/10/11/gaussian-blur-filter-shader/
 *   and used in http://www.cake23.de/traveling-wavefronts-lit-up.html
 *
 * - 9 samples per pass
 * - standard deviation 2.7
 * - "h" and "v" parameters should be set to "1 / width" and "1 / height"
 */
const HorizontalBlurShader = {
  uniforms: {
    tDiffuse: {
      value: null
    },
    h: {
      value: 1.0 / 512.0
    }
  },
  vertexShader:
  /* glsl */
  `
      varying vec2 vUv;

      void main() {

        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

      }
  `,
  fragmentShader:
  /* glsl */
  `
    uniform sampler2D tDiffuse;
    uniform float h;

    varying vec2 vUv;

    void main() {

    	vec4 sum = vec4( 0.0 );

    	sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

    	gl_FragColor = sum;

    }
  `
};



;// CONCATENATED MODULE: ./node_modules/three-stdlib/shaders/VerticalBlurShader.js
/**
 * Two pass Gaussian blur filter (horizontal and vertical blur shaders)
 * - described in http://www.gamerendering.com/2008/10/11/gaussian-blur-filter-shader/
 *   and used in http://www.cake23.de/traveling-wavefronts-lit-up.html
 *
 * - 9 samples per pass
 * - standard deviation 2.7
 * - "h" and "v" parameters should be set to "1 / width" and "1 / height"
 */
const VerticalBlurShader = {
  uniforms: {
    tDiffuse: {
      value: null
    },
    v: {
      value: 1.0 / 512.0
    }
  },
  vertexShader:
  /* glsl */
  `
    varying vec2 vUv;

    void main() {

      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }
  `,
  fragmentShader:
  /* glsl */
  `

  uniform sampler2D tDiffuse;
  uniform float v;

  varying vec2 vUv;

  void main() {

    vec4 sum = vec4( 0.0 );

    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

    gl_FragColor = sum;

  }
  `
};



;// CONCATENATED MODULE: ./node_modules/@react-three/drei/core/ContactShadows.js






const ContactShadows = /*#__PURE__*/react.forwardRef(({
  scale = 10,
  frames = Infinity,
  opacity = 1,
  width = 1,
  height = 1,
  blur = 1,
  far = 10,
  resolution = 512,
  smooth = true,
  color = '#000000',
  depthWrite = false,
  renderOrder,
  ...props
}, fref) => {
  const ref = react.useRef(null);
  const scene = (0,index_73d51a81_esm.z)(state => state.scene);
  const gl = (0,index_73d51a81_esm.z)(state => state.gl);
  const shadowCamera = react.useRef(null);
  width = width * (Array.isArray(scale) ? scale[0] : scale || 1);
  height = height * (Array.isArray(scale) ? scale[1] : scale || 1);
  const [renderTarget, planeGeometry, depthMaterial, blurPlane, horizontalBlurMaterial, verticalBlurMaterial, renderTargetBlur] = react.useMemo(() => {
    const renderTarget = new three_module.WebGLRenderTarget(resolution, resolution);
    const renderTargetBlur = new three_module.WebGLRenderTarget(resolution, resolution);
    renderTargetBlur.texture.generateMipmaps = renderTarget.texture.generateMipmaps = false;
    const planeGeometry = new three_module.PlaneGeometry(width, height).rotateX(Math.PI / 2);
    const blurPlane = new three_module.Mesh(planeGeometry);
    const depthMaterial = new three_module.MeshDepthMaterial();
    depthMaterial.depthTest = depthMaterial.depthWrite = false;

    depthMaterial.onBeforeCompile = shader => {
      shader.uniforms = { ...shader.uniforms,
        ucolor: {
          value: new three_module.Color(color)
        }
      };
      shader.fragmentShader = shader.fragmentShader.replace(`void main() {`, //
      `uniform vec3 ucolor;
           void main() {
          `);
      shader.fragmentShader = shader.fragmentShader.replace('vec4( vec3( 1.0 - fragCoordZ ), opacity );', // Colorize the shadow, multiply by the falloff so that the center can remain darker
      'vec4( ucolor * fragCoordZ * 2.0, ( 1.0 - fragCoordZ ) * 1.0 );');
    };

    const horizontalBlurMaterial = new three_module.ShaderMaterial(HorizontalBlurShader);
    const verticalBlurMaterial = new three_module.ShaderMaterial(VerticalBlurShader);
    verticalBlurMaterial.depthTest = horizontalBlurMaterial.depthTest = false;
    return [renderTarget, planeGeometry, depthMaterial, blurPlane, horizontalBlurMaterial, verticalBlurMaterial, renderTargetBlur];
  }, [resolution, width, height, scale, color]);

  const blurShadows = blur => {
    blurPlane.visible = true;
    blurPlane.material = horizontalBlurMaterial;
    horizontalBlurMaterial.uniforms.tDiffuse.value = renderTarget.texture;
    horizontalBlurMaterial.uniforms.h.value = blur * 1 / 256;
    gl.setRenderTarget(renderTargetBlur);
    gl.render(blurPlane, shadowCamera.current);
    blurPlane.material = verticalBlurMaterial;
    verticalBlurMaterial.uniforms.tDiffuse.value = renderTargetBlur.texture;
    verticalBlurMaterial.uniforms.v.value = blur * 1 / 256;
    gl.setRenderTarget(renderTarget);
    gl.render(blurPlane, shadowCamera.current);
    blurPlane.visible = false;
  };

  let count = 0;
  let initialBackground;
  let initialOverrideMaterial;
  (0,index_73d51a81_esm.A)(() => {
    if (shadowCamera.current && (frames === Infinity || count < frames)) {
      count++;
      initialBackground = scene.background;
      initialOverrideMaterial = scene.overrideMaterial;
      ref.current.visible = false;
      scene.background = null;
      scene.overrideMaterial = depthMaterial;
      gl.setRenderTarget(renderTarget);
      gl.render(scene, shadowCamera.current);
      blurShadows(blur);
      if (smooth) blurShadows(blur * 0.4);
      gl.setRenderTarget(null);
      ref.current.visible = true;
      scene.overrideMaterial = initialOverrideMaterial;
      scene.background = initialBackground;
    }
  });
  react.useImperativeHandle(fref, () => ref.current, []);
  return /*#__PURE__*/react.createElement("group", (0,esm_extends/* default */.Z)({
    "rotation-x": Math.PI / 2
  }, props, {
    ref: ref
  }), /*#__PURE__*/react.createElement("mesh", {
    renderOrder: renderOrder,
    geometry: planeGeometry,
    scale: [1, -1, 1],
    rotation: [-Math.PI / 2, 0, 0]
  }, /*#__PURE__*/react.createElement("meshBasicMaterial", {
    transparent: true,
    map: renderTarget.texture,
    "map-encoding": gl.outputEncoding,
    opacity: opacity,
    depthWrite: depthWrite
  })), /*#__PURE__*/react.createElement("orthographicCamera", {
    ref: shadowCamera,
    args: [-width / 2, width / 2, height / 2, -height / 2, 0, far]
  }));
});



;// CONCATENATED MODULE: ./node_modules/@react-three/drei/core/Center.js




const Center = /*#__PURE__*/react.forwardRef(function Center({
  children,
  disable,
  disableX,
  disableY,
  disableZ,
  left,
  right,
  top,
  bottom,
  front,
  back,
  onCentered,
  precise = true,
  ...props
}, fRef) {
  const ref = react.useRef(null);
  const outer = react.useRef(null);
  const inner = react.useRef(null);
  react.useLayoutEffect(() => {
    outer.current.matrixWorld.identity();
    const box3 = new three_module.Box3().setFromObject(inner.current, precise);
    const center = new three_module.Vector3();
    const sphere = new three_module.Sphere();
    const width = box3.max.x - box3.min.x;
    const height = box3.max.y - box3.min.y;
    const depth = box3.max.z - box3.min.z;
    box3.getCenter(center);
    box3.getBoundingSphere(sphere);
    const vAlign = top ? height / 2 : bottom ? -height / 2 : 0;
    const hAlign = left ? -width / 2 : right ? width / 2 : 0;
    const dAlign = front ? depth / 2 : back ? -depth / 2 : 0;
    outer.current.position.set(disable || disableX ? 0 : -center.x + hAlign, disable || disableY ? 0 : -center.y + vAlign, disable || disableZ ? 0 : -center.z + dAlign);

    if (typeof onCentered !== 'undefined') {
      onCentered({
        parent: ref.current.parent,
        container: ref.current,
        width,
        height,
        depth,
        boundingBox: box3,
        boundingSphere: sphere,
        center: center,
        verticalAlignment: vAlign,
        horizontalAlignment: hAlign,
        depthAlignment: dAlign
      });
    }
  }, [children]);
  react.useImperativeHandle(fRef, () => ref.current, []);
  return /*#__PURE__*/react.createElement("group", (0,esm_extends/* default */.Z)({
    ref: ref
  }, props), /*#__PURE__*/react.createElement("group", {
    ref: outer
  }, /*#__PURE__*/react.createElement("group", {
    ref: inner
  }, children)));
});



;// CONCATENATED MODULE: ./node_modules/@react-three/drei/core/shaderMaterial.js


function shaderMaterial(uniforms, vertexShader, fragmentShader, onInit) {
  const material = class material extends three_module.ShaderMaterial {
    constructor(parameters = {}) {
      const entries = Object.entries(uniforms); // Create unforms and shaders

      super({
        uniforms: entries.reduce((acc, [name, value]) => {
          const uniform = three_module.UniformsUtils.clone({
            [name]: {
              value
            }
          });
          return { ...acc,
            ...uniform
          };
        }, {}),
        vertexShader,
        fragmentShader
      }); // Create getter/setters

      this.key = '';
      entries.forEach(([name]) => Object.defineProperty(this, name, {
        get: () => this.uniforms[name].value,
        set: v => this.uniforms[name].value = v
      })); // Assign parameters, this might include uniforms

      Object.assign(this, parameters); // Call onInit

      if (onInit) onInit(this);
    }

  };
  material.key = three_module.MathUtils.generateUUID();
  return material;
}



;// CONCATENATED MODULE: ./node_modules/@react-three/drei/materials/DiscardMaterial.js


const DiscardMaterial = shaderMaterial({}, 'void main() { }', 'void main() { gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0); discard;  }');



;// CONCATENATED MODULE: ./node_modules/@react-three/drei/core/AccumulativeShadows.js







function isLight(object) {
  return object.isLight;
}

function isGeometry(object) {
  return !!object.geometry;
}

const accumulativeContext = /*#__PURE__*/react.createContext(null);
const SoftShadowMaterial = shaderMaterial({
  color: new three_module.Color(),
  blend: 2.0,
  alphaTest: 0.75,
  opacity: 0,
  map: null
}, `varying vec2 vUv;
   void main() {
     gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.);
     vUv = uv;
   }`, `varying vec2 vUv;
   uniform sampler2D map;
   uniform vec3 color;
   uniform float opacity;
   uniform float alphaTest;
   uniform float blend;
   void main() {
     vec4 sampledDiffuseColor = texture2D(map, vUv);
     gl_FragColor = vec4(color * sampledDiffuseColor.r * blend, max(0.0, (1.0 - (sampledDiffuseColor.r + sampledDiffuseColor.g + sampledDiffuseColor.b) / alphaTest)) * opacity);
     #include <tonemapping_fragment>
     #include <encodings_fragment>
   }`);
const AccumulativeShadows = /*#__PURE__*/react.forwardRef(({
  children,
  temporal,
  frames = 40,
  limit = Infinity,
  blend = 20,
  scale = 10,
  opacity = 1,
  alphaTest = 0.75,
  color = 'black',
  colorBlend = 2,
  resolution = 1024,
  toneMapped = true,
  ...props
}, forwardRef) => {
  (0,index_73d51a81_esm.e)({
    SoftShadowMaterial
  });
  const gl = (0,index_73d51a81_esm.z)(state => state.gl);
  const scene = (0,index_73d51a81_esm.z)(state => state.scene);
  const camera = (0,index_73d51a81_esm.z)(state => state.camera);
  const invalidate = (0,index_73d51a81_esm.z)(state => state.invalidate);
  const gPlane = react.useRef(null);
  const gLights = react.useRef(null);
  const [plm] = react.useState(() => new ProgressiveLightMap(gl, scene, resolution));
  react.useLayoutEffect(() => {
    plm.configure(gPlane.current);
  }, []);
  const api = react.useMemo(() => ({
    lights: new Map(),
    temporal: !!temporal,
    frames: Math.max(2, frames),
    blend: Math.max(2, frames === Infinity ? blend : frames),
    count: 0,
    getMesh: () => gPlane.current,
    reset: () => {
      // Clear buffers, reset opacities, set frame count to 0
      plm.clear();
      const material = gPlane.current.material;
      material.opacity = 0;
      material.alphaTest = 0;
      api.count = 0;
    },
    update: (frames = 1) => {
      // Adapt the opacity-blend ratio to the number of frames
      const material = gPlane.current.material;

      if (!api.temporal) {
        material.opacity = opacity;
        material.alphaTest = alphaTest;
      } else {
        material.opacity = Math.min(opacity, material.opacity + opacity / api.blend);
        material.alphaTest = Math.min(alphaTest, material.alphaTest + alphaTest / api.blend);
      } // Switch accumulative lights on


      gLights.current.visible = true; // Collect scene lights and meshes

      plm.prepare(); // Update the lightmap and the accumulative lights

      for (let i = 0; i < frames; i++) {
        api.lights.forEach(light => light.update());
        plm.update(camera, api.blend);
      } // Switch lights off


      gLights.current.visible = false; // Restore lights and meshes

      plm.finish();
    }
  }), [plm, camera, scene, temporal, frames, blend, opacity, alphaTest]);
  react.useLayoutEffect(() => {
    // Reset internals, buffers, ...
    api.reset(); // Update lightmap

    if (!api.temporal && api.frames !== Infinity) api.update(api.blend);
  }); // Expose api, allow children to set itself as the main light source

  react.useImperativeHandle(forwardRef, () => api, [api]);
  (0,index_73d51a81_esm.A)(() => {
    if ((api.temporal || api.frames === Infinity) && api.count < api.frames && api.count < limit) {
      invalidate();
      api.update();
      api.count++;
    }
  });
  return /*#__PURE__*/react.createElement("group", props, /*#__PURE__*/react.createElement("group", {
    traverse: () => null,
    ref: gLights
  }, /*#__PURE__*/react.createElement(accumulativeContext.Provider, {
    value: api
  }, children)), /*#__PURE__*/react.createElement("mesh", {
    receiveShadow: true,
    ref: gPlane,
    scale: scale,
    rotation: [-Math.PI / 2, 0, 0]
  }, /*#__PURE__*/react.createElement("planeGeometry", null), /*#__PURE__*/react.createElement("softShadowMaterial", {
    transparent: true,
    depthWrite: false,
    toneMapped: toneMapped,
    color: color,
    blend: colorBlend,
    map: plm.progressiveLightMap2.texture
  })));
});
const RandomizedLight = /*#__PURE__*/react.forwardRef(({
  castShadow = true,
  bias = 0.001,
  mapSize = 512,
  size = 5,
  near = 0.5,
  far = 500,
  frames = 1,
  position = [0, 0, 0],
  radius = 1,
  amount = 8,
  intensity = 1,
  ambient = 0.5,
  ...props
}, forwardRef) => {
  const gLights = react.useRef(null);
  const length = new three_module.Vector3(...position).length();
  const parent = react.useContext(accumulativeContext);
  const update = react.useCallback(() => {
    let light;

    if (gLights.current) {
      for (let l = 0; l < gLights.current.children.length; l++) {
        light = gLights.current.children[l];

        if (Math.random() > ambient) {
          light.position.set(position[0] + three_module.MathUtils.randFloatSpread(radius), position[1] + three_module.MathUtils.randFloatSpread(radius), position[2] + three_module.MathUtils.randFloatSpread(radius));
        } else {
          let lambda = Math.acos(2 * Math.random() - 1) - Math.PI / 2.0;
          let phi = 2 * Math.PI * Math.random();
          light.position.set(Math.cos(lambda) * Math.cos(phi) * length, Math.abs(Math.cos(lambda) * Math.sin(phi) * length), Math.sin(lambda) * length);
        }
      }
    }
  }, [radius, ambient, length, ...position]);
  const api = react.useMemo(() => ({
    update
  }), [update]);
  react.useImperativeHandle(forwardRef, () => api, [api]);
  react.useLayoutEffect(() => {
    const group = gLights.current;
    if (parent) parent.lights.set(group.uuid, api);
    return () => void parent.lights.delete(group.uuid);
  }, [parent, api]);
  return /*#__PURE__*/react.createElement("group", (0,esm_extends/* default */.Z)({
    ref: gLights
  }, props), Array.from({
    length: amount
  }, (_, index) => /*#__PURE__*/react.createElement("directionalLight", {
    key: index,
    castShadow: castShadow,
    "shadow-bias": bias,
    "shadow-mapSize": [mapSize, mapSize],
    intensity: intensity / amount
  }, /*#__PURE__*/react.createElement("orthographicCamera", {
    attach: "shadow-camera",
    args: [-size, size, size, -size, near, far]
  }))));
}); // Based on "Progressive Light Map Accumulator", by [zalo](https://github.com/zalo/)

class ProgressiveLightMap {
  constructor(renderer, scene, res = 1024) {
    this.renderer = renderer;
    this.res = res;
    this.scene = scene;
    this.buffer1Active = false;
    this.lights = [];
    this.meshes = [];
    this.object = null;
    this.clearColor = new three_module.Color();
    this.clearAlpha = 0; // Create the Progressive LightMap Texture

    const format = /(Android|iPad|iPhone|iPod)/g.test(navigator.userAgent) ? three_module.HalfFloatType : three_module.FloatType;
    this.progressiveLightMap1 = new three_module.WebGLRenderTarget(this.res, this.res, {
      type: format,
      encoding: renderer.outputEncoding
    });
    this.progressiveLightMap2 = new three_module.WebGLRenderTarget(this.res, this.res, {
      type: format,
      encoding: renderer.outputEncoding
    }); // Inject some spicy new logic into a standard phong material

    this.discardMat = new DiscardMaterial();
    this.targetMat = new three_module.MeshLambertMaterial({
      fog: false
    });
    this.previousShadowMap = {
      value: this.progressiveLightMap1.texture
    };
    this.averagingWindow = {
      value: 100
    };

    this.targetMat.onBeforeCompile = shader => {
      // Vertex Shader: Set Vertex Positions to the Unwrapped UV Positions
      shader.vertexShader = 'varying vec2 vUv;\n' + shader.vertexShader.slice(0, -1) + 'vUv = uv; gl_Position = vec4((uv - 0.5) * 2.0, 1.0, 1.0); }'; // Fragment Shader: Set Pixels to average in the Previous frame's Shadows

      const bodyStart = shader.fragmentShader.indexOf('void main() {');
      shader.fragmentShader = 'varying vec2 vUv;\n' + shader.fragmentShader.slice(0, bodyStart) + 'uniform sampler2D previousShadowMap;\n	uniform float averagingWindow;\n' + shader.fragmentShader.slice(bodyStart - 1, -1) + `\nvec3 texelOld = texture2D(previousShadowMap, vUv).rgb;
        gl_FragColor.rgb = mix(texelOld, gl_FragColor.rgb, 1.0/ averagingWindow);
      }`; // Set the Previous Frame's Texture Buffer and Averaging Window

      shader.uniforms.previousShadowMap = this.previousShadowMap;
      shader.uniforms.averagingWindow = this.averagingWindow;
    };
  }

  clear() {
    this.renderer.getClearColor(this.clearColor);
    this.clearAlpha = this.renderer.getClearAlpha();
    this.renderer.setClearColor('black', 1);
    this.renderer.setRenderTarget(this.progressiveLightMap1);
    this.renderer.clear();
    this.renderer.setRenderTarget(this.progressiveLightMap2);
    this.renderer.clear();
    this.renderer.setRenderTarget(null);
    this.renderer.setClearColor(this.clearColor, this.clearAlpha);
    this.lights = [];
    this.meshes = [];
    this.scene.traverse(object => {
      if (isGeometry(object)) {
        this.meshes.push({
          object,
          material: object.material
        });
      } else if (isLight(object)) {
        this.lights.push({
          object,
          intensity: object.intensity
        });
      }
    });
  }

  prepare() {
    this.lights.forEach(light => light.object.intensity = 0);
    this.meshes.forEach(mesh => mesh.object.material = this.discardMat);
  }

  finish() {
    this.lights.forEach(light => light.object.intensity = light.intensity);
    this.meshes.forEach(mesh => mesh.object.material = mesh.material);
  }

  configure(object) {
    this.object = object;
  }

  update(camera, blendWindow = 100) {
    if (!this.object) return; // Set each object's material to the UV Unwrapped Surface Mapping Version

    this.averagingWindow.value = blendWindow;
    this.object.material = this.targetMat; // Ping-pong two surface buffers for reading/writing

    const activeMap = this.buffer1Active ? this.progressiveLightMap1 : this.progressiveLightMap2;
    const inactiveMap = this.buffer1Active ? this.progressiveLightMap2 : this.progressiveLightMap1; // Render the object's surface maps

    const oldBg = this.scene.background;
    this.scene.background = null;
    this.renderer.setRenderTarget(activeMap);
    this.previousShadowMap.value = inactiveMap.texture;
    this.buffer1Active = !this.buffer1Active;
    this.renderer.render(this.scene, camera);
    this.renderer.setRenderTarget(null);
    this.scene.background = oldBg;
  }

}



;// CONCATENATED MODULE: ./node_modules/@react-three/drei/core/Bounds.js




const isOrthographic = def => def && def.isOrthographicCamera;

const isBox3 = def => def && def.isBox3;

const context = /*#__PURE__*/react.createContext(null);
function Bounds({
  children,
  damping = 6,
  fit,
  clip,
  observe,
  margin = 1.2,
  eps = 0.01,
  onFit
}) {
  const ref = react.useRef(null);
  const {
    camera,
    invalidate,
    size,
    controls: controlsImpl
  } = (0,index_73d51a81_esm.z)();
  const controls = controlsImpl;
  const onFitRef = react.useRef(onFit);
  onFitRef.current = onFit;

  function equals(a, b) {
    return Math.abs(a.x - b.x) < eps && Math.abs(a.y - b.y) < eps && Math.abs(a.z - b.z) < eps;
  }

  function damp(v, t, lambda, delta) {
    v.x = three_module.MathUtils.damp(v.x, t.x, lambda, delta);
    v.y = three_module.MathUtils.damp(v.y, t.y, lambda, delta);
    v.z = three_module.MathUtils.damp(v.z, t.z, lambda, delta);
  }

  const [current] = react.useState(() => ({
    animating: false,
    focus: new three_module.Vector3(),
    camera: new three_module.Vector3(),
    zoom: 1
  }));
  const [goal] = react.useState(() => ({
    focus: new three_module.Vector3(),
    camera: new three_module.Vector3(),
    zoom: 1
  }));
  const [box] = react.useState(() => new three_module.Box3());
  const api = react.useMemo(() => {
    function getSize() {
      const size = box.getSize(new three_module.Vector3());
      const center = box.getCenter(new three_module.Vector3());
      const maxSize = Math.max(size.x, size.y, size.z);
      const fitHeightDistance = isOrthographic(camera) ? maxSize * 4 : maxSize / (2 * Math.atan(Math.PI * camera.fov / 360));
      const fitWidthDistance = isOrthographic(camera) ? maxSize * 4 : fitHeightDistance / camera.aspect;
      const distance = margin * Math.max(fitHeightDistance, fitWidthDistance);
      return {
        box,
        size,
        center,
        distance
      };
    }

    return {
      getSize,

      refresh(object) {
        if (isBox3(object)) box.copy(object);else {
          const target = object || ref.current;
          target.updateWorldMatrix(true, true);
          box.setFromObject(target);
        }

        if (box.isEmpty()) {
          const max = camera.position.length() || 10;
          box.setFromCenterAndSize(new three_module.Vector3(), new three_module.Vector3(max, max, max));
        }

        if ((controls == null ? void 0 : controls.constructor.name) === 'OrthographicTrackballControls') {
          // Put camera on a sphere along which it should move
          const {
            distance
          } = getSize();
          const direction = camera.position.clone().sub(controls.target).normalize().multiplyScalar(distance);
          const newPos = controls.target.clone().add(direction);
          camera.position.copy(newPos);
        }

        return this;
      },

      clip() {
        const {
          distance
        } = getSize();
        if (controls) controls.maxDistance = distance * 10;
        camera.near = distance / 100;
        camera.far = distance * 100;
        camera.updateProjectionMatrix();
        if (controls) controls.update();
        invalidate();
        return this;
      },

      to({
        position,
        target
      }) {
        current.camera.copy(camera.position);
        const {
          center
        } = getSize();
        goal.camera.set(...position);

        if (target) {
          goal.focus.set(...target);
        } else {
          goal.focus.copy(center);
        }

        if (damping) {
          current.animating = true;
        } else {
          camera.position.set(...position);
        }

        return this;
      },

      fit() {
        current.camera.copy(camera.position);
        if (controls) current.focus.copy(controls.target);
        const {
          center,
          distance
        } = getSize();
        const direction = center.clone().sub(camera.position).normalize().multiplyScalar(distance);
        goal.camera.copy(center).sub(direction);
        goal.focus.copy(center);

        if (isOrthographic(camera)) {
          current.zoom = camera.zoom;
          let maxHeight = 0,
              maxWidth = 0;
          const vertices = [new three_module.Vector3(box.min.x, box.min.y, box.min.z), new three_module.Vector3(box.min.x, box.max.y, box.min.z), new three_module.Vector3(box.min.x, box.min.y, box.max.z), new three_module.Vector3(box.min.x, box.max.y, box.max.z), new three_module.Vector3(box.max.x, box.max.y, box.max.z), new three_module.Vector3(box.max.x, box.max.y, box.min.z), new three_module.Vector3(box.max.x, box.min.y, box.max.z), new three_module.Vector3(box.max.x, box.min.y, box.min.z)]; // Transform the center and each corner to camera space

          center.applyMatrix4(camera.matrixWorldInverse);

          for (const v of vertices) {
            v.applyMatrix4(camera.matrixWorldInverse);
            maxHeight = Math.max(maxHeight, Math.abs(v.y - center.y));
            maxWidth = Math.max(maxWidth, Math.abs(v.x - center.x));
          }

          maxHeight *= 2;
          maxWidth *= 2;
          const zoomForHeight = (camera.top - camera.bottom) / maxHeight;
          const zoomForWidth = (camera.right - camera.left) / maxWidth;
          goal.zoom = Math.min(zoomForHeight, zoomForWidth) / margin;

          if (!damping) {
            camera.zoom = goal.zoom;
            camera.updateProjectionMatrix();
          }
        }

        if (damping) {
          current.animating = true;
        } else {
          camera.position.copy(goal.camera);
          camera.lookAt(goal.focus);

          if (controls) {
            controls.target.copy(goal.focus);
            controls.update();
          }
        }

        if (onFitRef.current) onFitRef.current(this.getSize());
        invalidate();
        return this;
      }

    };
  }, [box, camera, controls, margin, damping, invalidate]);
  react.useLayoutEffect(() => {
    if (controls) {
      // Try to prevent drag hijacking
      const callback = () => current.animating = false;

      controls.addEventListener('start', callback);
      return () => controls.removeEventListener('start', callback);
    }
  }, [controls]); // Scale pointer on window resize

  const count = react.useRef(0);
  react.useLayoutEffect(() => {
    if (observe || count.current++ === 0) {
      api.refresh();
      if (fit) api.fit();
      if (clip) api.clip();
    }
  }, [size, clip, fit, observe, camera, controls]);
  (0,index_73d51a81_esm.A)((state, delta) => {
    if (current.animating) {
      damp(current.focus, goal.focus, damping, delta);
      damp(current.camera, goal.camera, damping, delta);
      current.zoom = three_module.MathUtils.damp(current.zoom, goal.zoom, damping, delta);
      camera.position.copy(current.camera);

      if (isOrthographic(camera)) {
        camera.zoom = current.zoom;
        camera.updateProjectionMatrix();
      }

      if (!controls) {
        camera.lookAt(current.focus);
      } else {
        controls.target.copy(current.focus);
        controls.update();
      }

      invalidate();
      if (isOrthographic(camera) && !(Math.abs(current.zoom - goal.zoom) < eps)) return;
      if (!isOrthographic(camera) && !equals(current.camera, goal.camera)) return;
      if (controls && !equals(current.focus, goal.focus)) return;
      current.animating = false;
    }
  });
  return /*#__PURE__*/react.createElement("group", {
    ref: ref
  }, /*#__PURE__*/react.createElement(context.Provider, {
    value: api
  }, children));
}
function useBounds() {
  return react.useContext(context);
}



;// CONCATENATED MODULE: ./node_modules/@react-three/drei/core/Stage.js








const presets = {
  rembrandt: {
    main: [1, 2, 1],
    fill: [-2, -0.5, -2]
  },
  portrait: {
    main: [-1, 2, 0.5],
    fill: [-1, 0.5, -1.5]
  },
  upfront: {
    main: [0, 2, 1],
    fill: [-1, 0.5, -1.5]
  },
  soft: {
    main: [-2, 4, 4],
    fill: [-1, 0.5, -1.5]
  }
};

function Refit({
  radius,
  adjustCamera
}) {
  const api = useBounds();
  react.useEffect(() => {
    if (adjustCamera) api.refresh().clip().fit();
  }, [radius, adjustCamera]);
  return null;
}

function Stage({
  children,
  center,
  adjustCamera = true,
  intensity = 0.5,
  shadows = 'contact',
  environment = 'city',
  preset = 'rembrandt',
  ...props
}) {
  var _bias, _normalBias, _size, _offset, _amount, _radius, _ambient, _intensity;

  const config = typeof preset === 'string' ? presets[preset] : preset;
  const [{
    radius,
    height
  }, set] = react.useState({
    radius: 0,
    width: 0,
    height: 0,
    depth: 0
  });
  const shadowBias = (_bias = shadows == null ? void 0 : shadows.bias) !== null && _bias !== void 0 ? _bias : -0.0001;
  const normalBias = (_normalBias = shadows == null ? void 0 : shadows.normalBias) !== null && _normalBias !== void 0 ? _normalBias : 0;
  const shadowSize = (_size = shadows == null ? void 0 : shadows.size) !== null && _size !== void 0 ? _size : 1024;
  const shadowOffset = (_offset = shadows == null ? void 0 : shadows.offset) !== null && _offset !== void 0 ? _offset : 0;
  const contactShadow = shadows === 'contact' || (shadows == null ? void 0 : shadows.type) === 'contact';
  const accumulativeShadow = shadows === 'accumulative' || (shadows == null ? void 0 : shadows.type) === 'accumulative';
  const shadowSpread = { ...(typeof shadows === 'object' ? shadows : {})
  };
  const environmentProps = !environment ? null : typeof environment === 'string' ? {
    preset: environment
  } : environment;
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("ambientLight", {
    intensity: intensity / 3
  }), /*#__PURE__*/react.createElement("spotLight", {
    penumbra: 1,
    position: [config.main[0] * radius, config.main[1] * radius, config.main[2] * radius],
    intensity: intensity * 2,
    castShadow: !!shadows,
    "shadow-bias": shadowBias,
    "shadow-normalBias": normalBias,
    "shadow-mapSize": shadowSize
  }), /*#__PURE__*/react.createElement("pointLight", {
    position: [config.fill[0] * radius, config.fill[1] * radius, config.fill[2] * radius],
    intensity: intensity
  }), /*#__PURE__*/react.createElement(Bounds, (0,esm_extends/* default */.Z)({
    fit: !!adjustCamera,
    clip: !!adjustCamera,
    margin: Number(adjustCamera),
    observe: true
  }, props), /*#__PURE__*/react.createElement(Refit, {
    radius: radius,
    adjustCamera: adjustCamera
  }), /*#__PURE__*/react.createElement(Center, (0,esm_extends/* default */.Z)({}, center, {
    position: [0, shadowOffset / 2, 0],
    onCentered: props => {
      const {
        width,
        height,
        depth,
        boundingSphere
      } = props;
      set({
        radius: boundingSphere.radius,
        width,
        height,
        depth
      });
      if (center != null && center.onCentered) center.onCentered(props);
    }
  }), children)), /*#__PURE__*/react.createElement("group", {
    position: [0, -height / 2 - shadowOffset / 2, 0]
  }, contactShadow && /*#__PURE__*/react.createElement(ContactShadows, (0,esm_extends/* default */.Z)({
    scale: radius * 4,
    far: radius,
    blur: 2
  }, shadowSpread)), accumulativeShadow && /*#__PURE__*/react.createElement(AccumulativeShadows, (0,esm_extends/* default */.Z)({
    temporal: true,
    frames: 100,
    alphaTest: 0.9,
    toneMapped: true,
    scale: radius * 4
  }, shadowSpread), /*#__PURE__*/react.createElement(RandomizedLight, {
    amount: (_amount = shadowSpread.amount) !== null && _amount !== void 0 ? _amount : 8,
    radius: (_radius = shadowSpread.radius) !== null && _radius !== void 0 ? _radius : radius,
    ambient: (_ambient = shadowSpread.ambient) !== null && _ambient !== void 0 ? _ambient : 0.5,
    intensity: (_intensity = shadowSpread.intensity) !== null && _intensity !== void 0 ? _intensity : 1,
    position: [config.main[0] * radius, config.main[1] * radius, config.main[2] * radius],
    size: radius * 4,
    bias: -shadowBias,
    mapSize: shadowSize
  }))), environment && /*#__PURE__*/react.createElement(Environment, environmentProps));
}



// EXTERNAL MODULE: ./node_modules/@react-three/drei/core/OrbitControls.js + 1 modules
var OrbitControls = __webpack_require__(66037);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Fullscreen.js
var Fullscreen = __webpack_require__(55343);
// EXTERNAL MODULE: ./src/components/ui/IconButtonWithTooltip.tsx + 1 modules
var IconButtonWithTooltip = __webpack_require__(48147);
;// CONCATENATED MODULE: ./src/components/models/ModelViewer.js
function ModelViewer(props){// eslint-disable-next-line react/prop-types
var{children,responsive,style,autoRotate}=props;var ref=(0,react.useRef)();var controlsRef=(0,react.useRef)();var canvasRef=(0,react.useRef)();var supportsFullScreen=typeof document!=="undefined"&&!!document.fullscreenEnabled;var handleFullScreen=()=>{var _canvasRef$current;return(_canvasRef$current=canvasRef.current)===null||_canvasRef$current===void 0?void 0:_canvasRef$current.requestFullscreen();};return/*#__PURE__*/react.createElement("div",{ref:canvasRef,style:style?style:responsive?{position:"relative",width:"35vw",height:"35vw"}:{position:"relative",width:"clamp(50vw, 640px, 96vw)",height:"clamp(480px, 60vh, 96vh)"}},/*#__PURE__*/react.createElement(react_three_fiber_esm/* Canvas */.Xz,{orthographic:true,shadows:true,dpr:[1,2],camera:{zoom:4},resize:{scroll:false}},/*#__PURE__*/react.createElement(Stage,{controls:ref,intensity:0.5,contactShadow:true,shadows:true,adjustCamera:true},children),/*#__PURE__*/react.createElement(OrbitControls/* OrbitControls */.z,{ref:controlsRef,autoRotate:!!autoRotate})),supportsFullScreen&&/*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z,{style:{position:"absolute",right:"0.5rem",bottom:"0.5rem"},size:"small",onClick:handleFullScreen,title:"full screen"},/*#__PURE__*/react.createElement(Fullscreen/* default */.Z,null)));}
;// CONCATENATED MODULE: ./src/components/models/STLModelCard.tsx
function STLModelCard(props){var{name,url,color,autoRotate}=props;var fn=name+".stl";return/*#__PURE__*/react.createElement(NoSsr/* default */.Z,null,/*#__PURE__*/react.createElement(Card/* default */.Z,null,/*#__PURE__*/react.createElement(CardHeader/* default */.Z,{title:fn}),/*#__PURE__*/react.createElement(CardMedia/* default */.Z,null,/*#__PURE__*/react.createElement(ModelViewer,{responsive:true,style:{position:"relative",height:"20rem",width:"100%"},autoRotate:autoRotate},/*#__PURE__*/react.createElement(STLModel,{url:url,color:color}))),/*#__PURE__*/react.createElement(CardActions/* default */.Z,null,/*#__PURE__*/react.createElement(Button/* default */.Z,{href:url,variant:"outlined",download:fn},"Download"))));}

/***/ })

}]);
//# sourceMappingURL=1216-c7fc3e8282a7ba93374a.js.map