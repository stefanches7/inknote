// |__|  A......................................
//  __                                          
// |__|  MIND_BENDINGLY_AWESOME.................
//  __                                          
// |__|  TRULY_INNOVATIVE.......................
//  __                                          
// |__|  BROWSER_BASED..........................
//  __                                          
// |__|  MUSICALLY_ENLIGHTENING.................
//  __                                          
// |__|  PRODUCT_OF.............................
//  __ __    __ __  _____    __ _____ ________ _
// |  |  \  |  |  |/  /  \  |  |     |_    ___|_|
// |  |   \ |  |     /    \ |  |  _  | |  |  |_ 
// |  | |\ \|  |     \  |\ \|  | |_| | |  |   _|
// |  | | \    |  |\  \ | \    |     | | /   |__
// |__|_|  \___|__| \__\|  \___|_____| |/|______|
//                                              
// All rights reserved.                          
// Copyright @ Michal Paszkiewicz 2015;          
var Inknote;
(function (Inknote) {
    function allItemsAre(items, xAndY) {
        for (var i = 0; i < items.length; i++) {
            if (!xAndY(items[i])) {
                return false;
            }
        }
        return true;
    }
    Inknote.allItemsAre = allItemsAre;
    function countWhere(items, xAndY) {
        var count = 0;
        for (var i = 0; i < items.length; i++) {
            if (xAndY(items[i])) {
                count++;
            }
        }
        return count;
    }
    Inknote.countWhere = countWhere;
    function getItemsWhere(items, xAndY) {
        var result = [];
        for (var i = 0; i < items.length; i++) {
            if (xAndY(items[i])) {
                result.push(items[i]);
            }
        }
        return result;
    }
    Inknote.getItemsWhere = getItemsWhere;
    function sum(items, xAndY) {
        var total = 0;
        for (var i = 0; i < items.length; i++) {
            total += xAndY(items[i]);
        }
        return total;
    }
    Inknote.sum = sum;
    function last(items) {
        return items[items.length - 1];
    }
    Inknote.last = last;
    function arraysAreEqual(arrayOne, arrayTwo) {
        // if first array is false, return
        if (!arrayOne) {
            return false;
        }
        // if the other array is a falsy value, return
        if (!arrayTwo) {
            return false;
        }
        // compare lengths - can save a lot of time 
        if (arrayOne.length != arrayTwo.length) {
            return false;
        }
        for (var i = 0, l = this.length; i < l; i++) {
            // Check if we have nested arrays
            if (arrayOne[i] instanceof Array && arrayTwo[i] instanceof Array) {
                // recurse into the nested arrays
                if (!arraysAreEqual(arrayOne[i], arrayTwo[i])) {
                    return false;
                }
            }
            else if (arrayOne[i] != arrayTwo[i]) {
                // Warning - two different object instances will never be equal: {x:20} != {x:20}
                return false;
            }
        }
        return true;
    }
    Inknote.arraysAreEqual = arraysAreEqual;
    function copySimpleArrayFrom(array) {
        var newArray = [];
        for (var i = 0; i < array.length; i++) {
            newArray.push(array[i]);
        }
        return newArray;
    }
    Inknote.copySimpleArrayFrom = copySimpleArrayFrom;
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    function getID() {
        return ((new Date).getTime() + "") + Math.floor(10000 * Math.random());
    }
    Inknote.getID = getID;
    function pascalCase(text) {
        var newString = "";
        var textArray = text.split("");
        for (var i = 0; i < textArray.length; i++) {
            if (i == 0) {
                newString += textArray[i].toUpperCase();
            }
            else {
                newString += textArray[i].toLowerCase();
            }
        }
        return newString;
    }
    Inknote.pascalCase = pascalCase;
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    function drawTextAlongArc(context, str, centerX, centerY, radius, angle) {
        var len = str.length, s;
        context.beginPath();
        context.textAlign = "center";
        context.save();
        context.translate(centerX, centerY);
        context.rotate(-1 * angle / 2);
        context.rotate(-1 * (angle / len) / 2);
        for (var n = 0; n < len; n++) {
            context.rotate(angle / len);
            context.save();
            context.translate(0, -1 * radius);
            s = str[n];
            context.font = "12px Arial";
            context.shadowColor = "black";
            context.shadowOffsetX = 1;
            context.shadowOffsetY = 1;
            context.shadowBlur = 1;
            context.fillText(s, 0, 0);
            context.restore();
        }
        context.restore();
    }
    Inknote.drawTextAlongArc = drawTextAlongArc;
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var Maths;
    (function (Maths) {
        function isWithinRadius(x1, y1, x2, y2, radius) {
            var dx = x1 - x2;
            var dy = y1 - y2;
            var dr = Math.sqrt(dx * dx + dy * dy);
            return dr <= radius;
        }
        Maths.isWithinRadius = isWithinRadius;
        function permutateSimpleNumberArray(array) {
            var copiedArray = Inknote.copySimpleArrayFrom(array);
            var lastValue = copiedArray.pop();
            var permutatedArray = [lastValue].concat(copiedArray);
            return permutatedArray;
        }
        function alignSimilarArrayTo(toBeAligned, toAlignTo) {
            var permutation = Inknote.copySimpleArrayFrom(toBeAligned);
            var bestValue = Infinity;
            var bestPermutation = Inknote.copySimpleArrayFrom(permutation);
            var permutations = toBeAligned.length;
            for (var i = 0; i < permutations; i++) {
                permutation = permutateSimpleNumberArray(permutation);
                var score = 0;
                for (var j = 0; j < permutation.length; j++) {
                    score += Math.abs(permutation[j] - toAlignTo[j]);
                }
                if (score < bestValue) {
                    bestPermutation = Inknote.copySimpleArrayFrom(permutation);
                }
            }
            return bestPermutation;
        }
        Maths.alignSimilarArrayTo = alignSimilarArrayTo;
    })(Maths = Inknote.Maths || (Inknote.Maths = {}));
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var Setting = (function () {
        function Setting(name) {
            this.staveColour = "black";
            this.noteColour = "red";
            this.textColour = "green";
            this.keypressFuncsOn = true;
            this.serverURL = "https://lit-basin-6551.herokuapp.com";
            this.ID = Inknote.getID();
            this.name = name;
            this.testMode = false;
            this.notationType = 0 /* Standard */;
            if (!name) {
                this.name = this.ID;
            }
        }
        return Setting;
    })();
    Inknote.Setting = Setting;
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var DrawOptions = (function () {
        function DrawOptions() {
        }
        return DrawOptions;
    })();
    Inknote.DrawOptions = DrawOptions;
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var Model;
    (function (Model) {
        var TimeSignature = (function () {
            function TimeSignature(top, bottom) {
                this.top = top;
                this.bottom = bottom;
                if (Math.round(top) != top || Math.round(bottom) != bottom) {
                    throw new Error("Time signatures can only take integers");
                }
            }
            return TimeSignature;
        })();
        Model.TimeSignature = TimeSignature;
    })(Model = Inknote.Model || (Inknote.Model = {}));
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var Notation = (function () {
        function Notation(drawFunction) {
            this.ID = Inknote.getID();
            this.order = 50;
            if (drawFunction) {
                this.draw = drawFunction;
            }
        }
        Notation.prototype.draw = function (ctx) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            ctx.fill();
            return false;
        };
        Notation.prototype.isOver = function (x, y) {
            var IS = Inknote.Maths.isWithinRadius(x, y, this.x, this.y, 10);
            if (IS) {
                this.hover = true;
            }
            else {
                this.hover = false;
            }
            return IS;
        };
        return Notation;
    })();
    Inknote.Notation = Notation;
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var Model;
    (function (Model) {
        (function (NoteValue) {
            NoteValue[NoteValue["A"] = 0] = "A";
            NoteValue[NoteValue["Bb"] = 1] = "Bb";
            NoteValue[NoteValue["B"] = 2] = "B";
            NoteValue[NoteValue["C"] = 3] = "C";
            NoteValue[NoteValue["Db"] = 4] = "Db";
            NoteValue[NoteValue["D"] = 5] = "D";
            NoteValue[NoteValue["Eb"] = 6] = "Eb";
            NoteValue[NoteValue["E"] = 7] = "E";
            NoteValue[NoteValue["F"] = 8] = "F";
            NoteValue[NoteValue["Gb"] = 9] = "Gb";
            NoteValue[NoteValue["G"] = 10] = "G";
            NoteValue[NoteValue["Ab"] = 11] = "Ab";
        })(Model.NoteValue || (Model.NoteValue = {}));
        var NoteValue = Model.NoteValue;
    })(Model = Inknote.Model || (Inknote.Model = {}));
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var Model;
    (function (Model) {
        (function (NoteLength) {
            NoteLength[NoteLength["Breve"] = 0] = "Breve";
            NoteLength[NoteLength["SemiBreve"] = 1] = "SemiBreve";
            NoteLength[NoteLength["Minim"] = 2] = "Minim";
            NoteLength[NoteLength["Crotchet"] = 3] = "Crotchet";
            NoteLength[NoteLength["Quaver"] = 4] = "Quaver";
            NoteLength[NoteLength["SemiQuaver"] = 5] = "SemiQuaver";
            NoteLength[NoteLength["DemiSemiQuaver"] = 6] = "DemiSemiQuaver";
            NoteLength[NoteLength["HemiDemiSemiQuaver"] = 7] = "HemiDemiSemiQuaver";
        })(Model.NoteLength || (Model.NoteLength = {}));
        var NoteLength = Model.NoteLength;
    })(Model = Inknote.Model || (Inknote.Model = {}));
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var Model;
    (function (Model) {
        var Rest = (function () {
            function Rest() {
            }
            return Rest;
        })();
        Model.Rest = Rest;
    })(Model = Inknote.Model || (Inknote.Model = {}));
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var Model;
    (function (Model) {
        var Note = (function () {
            function Note(value, octave, length) {
                this.ID = Inknote.getID();
                this.value = value;
                this.octave = octave, this.length = length;
            }
            return Note;
        })();
        Model.Note = Note;
    })(Model = Inknote.Model || (Inknote.Model = {}));
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var Model;
    (function (Model) {
        var Chord = (function () {
            function Chord(notes) {
                this.notes = notes;
            }
            return Chord;
        })();
        Model.Chord = Chord;
    })(Model = Inknote.Model || (Inknote.Model = {}));
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var Model;
    (function (Model) {
        var Bar = (function () {
            function Bar() {
            }
            return Bar;
        })();
        Model.Bar = Bar;
    })(Model = Inknote.Model || (Inknote.Model = {}));
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var Model;
    (function (Model) {
        var Instrument = (function () {
            function Instrument(name) {
                this.name = name;
                this.bars = [];
                this.visible = true;
                this.bars.push(new Model.Bar());
            }
            return Instrument;
        })();
        Model.Instrument = Instrument;
    })(Model = Inknote.Model || (Inknote.Model = {}));
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var Project = (function () {
        function Project(name) {
            this.pause = false;
            this.ID = Inknote.getID();
            this.name = name;
            this.hover = false;
            this.instruments = [];
            this.instruments.push(new Inknote.Model.Instrument("Guitar"));
            if (!name) {
                this.name = "Untitled";
            }
        }
        return Project;
    })();
    Inknote.Project = Project;
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    // stores settings of items currently to be drawn.
    var DrawingSettings = (function () {
        function DrawingSettings() {
            this.isNote = true;
        }
        Object.defineProperty(DrawingSettings, "Instance", {
            get: function () {
                if (this._instance === null || this._instance === undefined) {
                    this._instance = new DrawingSettings();
                }
                return this._instance;
            },
            enumerable: true,
            configurable: true
        });
        return DrawingSettings;
    })();
    Inknote.DrawingSettings = DrawingSettings;
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var Compressed;
    (function (Compressed) {
        var CompressedNote = (function () {
            function CompressedNote(value, octave, length) {
                this.value = value;
                this.octave = octave;
                this.length = length;
            }
            return CompressedNote;
        })();
        Compressed.CompressedNote = CompressedNote;
    })(Compressed = Inknote.Compressed || (Inknote.Compressed = {}));
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var Compressed;
    (function (Compressed) {
        var CompressedChord = (function () {
            function CompressedChord(notes) {
                this.notes = notes;
            }
            return CompressedChord;
        })();
        Compressed.CompressedChord = CompressedChord;
    })(Compressed = Inknote.Compressed || (Inknote.Compressed = {}));
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var Compressed;
    (function (Compressed) {
        // could contain chords & notes & rests.
        // simplest way to store...?
        var Bar = (function () {
            function Bar() {
            }
            return Bar;
        })();
        Compressed.Bar = Bar;
    })(Compressed = Inknote.Compressed || (Inknote.Compressed = {}));
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var Compressed;
    (function (Compressed) {
        var Instrument = (function () {
            function Instrument(name) {
                this.name = name;
                this.bars = [];
                this.bars.push(new Compressed.Bar());
            }
            return Instrument;
        })();
        Compressed.Instrument = Instrument;
    })(Compressed = Inknote.Compressed || (Inknote.Compressed = {}));
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var Compressed;
    (function (Compressed) {
        var CompressedProject = (function () {
            function CompressedProject(name) {
                this.name = name;
                this.ID = Inknote.getID();
                this.instruments = [];
                if (!name) {
                    this.name = this.ID;
                }
            }
            return CompressedProject;
        })();
        Compressed.CompressedProject = CompressedProject;
    })(Compressed = Inknote.Compressed || (Inknote.Compressed = {}));
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var Model;
    (function (Model) {
        // key will be an instance e.g. Bb minor.
        var Key = (function () {
            function Key(name, notesInKey, sharps, flats) {
                this.name = name;
                this.notesInKey = notesInKey;
                this.sharps = sharps;
                this.flats = flats;
            }
            Key.prototype.countSharps = function () {
                return this.sharps.length;
            };
            Key.prototype.countFlats = function () {
                return this.flats.length;
            };
            return Key;
        })();
        Model.Key = Key;
    })(Model = Inknote.Model || (Inknote.Model = {}));
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var Model;
    (function (Model) {
        // key types, e.g. minor, major, defined in keyDefinitions file.
        var KeyType = (function () {
            function KeyType(name, intervals) {
                this.name = name;
                this.intervals = intervals;
            }
            return KeyType;
        })();
        Model.KeyType = KeyType;
    })(Model = Inknote.Model || (Inknote.Model = {}));
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var Model;
    (function (Model) {
        var keyTypes = [
            new Model.KeyType("major", [0, 2, 4, 5, 7, 9, 11]),
            new Model.KeyType("melodic minor", [0, 2, 3, 5, 7, 8, 10]),
            new Model.KeyType("harmonic minor", [0, 2, 3, 5, 7, 8, 11])
        ];
        var C_MAJOR = new Model.Key("C_MAJOR", [
            3 /* C */,
            5 /* D */,
            7 /* E */,
            8 /* F */,
            10 /* G */,
            0 /* A */,
            2 /* B */
        ], [], []);
        function getSharpsFromNotesAndTranspose(notes) {
            var aligned = Inknote.Maths.alignSimilarArrayTo(notes, C_MAJOR.notesInKey);
            var sharps = [];
            for (var i = 0; i < aligned.length; i++) {
                if (aligned[i] == C_MAJOR.notesInKey[i] + 1) {
                    sharps.push(C_MAJOR.notesInKey[i]);
                }
            }
            return sharps;
        }
        function getFlatsFromNotesAndTranspose(notes) {
            var aligned = Inknote.Maths.alignSimilarArrayTo(notes, C_MAJOR.notesInKey);
            var flats = [];
            for (var i = 0; i < aligned.length; i++) {
                if (aligned[i] == C_MAJOR.notesInKey[i] - 1) {
                    flats.push(C_MAJOR.notesInKey[i]);
                }
            }
            return flats;
        }
        function getKeys(transpose) {
            if (!transpose) {
                transpose = 0;
            }
            var allKeys = [];
            for (var i = 0; i < keyTypes.length; i++) {
                var kt = keyTypes[i];
                for (var j in Model.NoteValue) {
                    var allKeyNotes = [];
                    var baseNote = new Model.Note(parseInt(Model.NoteValue[j]), 4, 1);
                    baseNote.value = (baseNote.value + transpose) % 12;
                    for (var k = 0; k < kt.intervals.length; k++) {
                        var tempNote = Inknote.getNoteOfDistance(baseNote, kt.intervals[k]);
                        allKeyNotes.push(tempNote.value);
                    }
                    allKeys.push(new Model.Key(j + " " + kt.name, allKeyNotes, getSharpsFromNotesAndTranspose(allKeyNotes), getFlatsFromNotesAndTranspose(allKeyNotes)));
                }
            }
            return allKeys;
        }
        var KeyHolder = (function () {
            function KeyHolder() {
            }
            KeyHolder.Instance = function () {
                if (!KeyHolder._instance) {
                    KeyHolder._instance = new KeyHolder();
                }
                return KeyHolder._instance;
            };
            KeyHolder.prototype.getAllKeys = function (transpose) {
                return getKeys(transpose);
            };
            return KeyHolder;
        })();
        Model.KeyHolder = KeyHolder;
    })(Model = Inknote.Model || (Inknote.Model = {}));
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var Model;
    (function (Model) {
        function NoteIsInKey(note, key) {
            for (var i = 0; i < key.notesInKey.length; i++) {
                if (note.value == key.notesInKey[i]) {
                    return true;
                }
            }
            return false;
        }
        Model.NoteIsInKey = NoteIsInKey;
    })(Model = Inknote.Model || (Inknote.Model = {}));
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    (function (NotationType) {
        NotationType[NotationType["Standard"] = 0] = "Standard";
        NotationType[NotationType["UPPER_lower"] = 1] = "UPPER_lower";
        NotationType[NotationType["DoReMi"] = 2] = "DoReMi";
    })(Inknote.NotationType || (Inknote.NotationType = {}));
    var NotationType = Inknote.NotationType;
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var ChordNotation;
    (function (ChordNotation) {
        function getDoReMiTextFrom(index) {
            return [
                "Do",
                "Di",
                "Re",
                "Ri",
                "Me",
                "Mi",
                "Fa",
                "Fi",
                "Sol",
                "Si",
                "La",
                "Li",
                "Te",
                "Ti"
            ][index];
        }
        var DoReMiChordNotation = (function () {
            function DoReMiChordNotation(baseNote, rootNote, minor, annotations) {
                this.baseNote = baseNote;
                this.rootNote = rootNote;
                this.minor = minor;
                this.annotations = annotations;
            }
            Object.defineProperty(DoReMiChordNotation.prototype, "name", {
                get: function () {
                    throw new Error("Not implemented");
                    return;
                },
                enumerable: true,
                configurable: true
            });
            return DoReMiChordNotation;
        })();
        ChordNotation.DoReMiChordNotation = DoReMiChordNotation;
    })(ChordNotation = Inknote.ChordNotation || (Inknote.ChordNotation = {}));
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var ChordNotation;
    (function (ChordNotation) {
        function getStandardTextFrom(index) {
            return [
                "C",
                "Db",
                "D",
                "Eb",
                "E",
                "F",
                "Gb",
                "G",
                "Ab",
                "A",
                "Bb",
                "B",
            ][index];
        }
        var StandardChordNotation = (function () {
            function StandardChordNotation(baseNote, rootNote, minor, annotations) {
                this.baseNote = baseNote;
                this.rootNote = rootNote;
                this.minor = minor;
                this.annotations = annotations;
            }
            Object.defineProperty(StandardChordNotation.prototype, "name", {
                get: function () {
                    var text = getStandardTextFrom(this.rootNote.value);
                    if (this.minor) {
                        text += "m";
                    }
                    text = text + this.annotations;
                    if (this.baseNote.value != this.rootNote.value) {
                        text += "/" + getStandardTextFrom(this.baseNote.value);
                    }
                    return text;
                },
                enumerable: true,
                configurable: true
            });
            return StandardChordNotation;
        })();
        ChordNotation.StandardChordNotation = StandardChordNotation;
    })(ChordNotation = Inknote.ChordNotation || (Inknote.ChordNotation = {}));
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var ChordNotation;
    (function (ChordNotation) {
        function getUPPER_lowerTextFrom(index) {
            return [
                "C",
                "Cis",
                "D",
                "Dis",
                "E",
                "F",
                "Fis",
                "G",
                "Gis",
                "A",
                "B",
                "H",
            ][index];
        }
        ;
        var UPPER_lowerChordNotation = (function () {
            function UPPER_lowerChordNotation(baseNote, rootNote, minor, annotations) {
                this.baseNote = baseNote;
                this.rootNote = rootNote;
                this.minor = minor;
                this.annotations = annotations;
            }
            Object.defineProperty(UPPER_lowerChordNotation.prototype, "name", {
                get: function () {
                    var text = getUPPER_lowerTextFrom(this.rootNote.value);
                    if (this.minor) {
                        text = text.toLowerCase();
                    }
                    text = text + this.annotations;
                    if (this.baseNote.value != this.rootNote.value) {
                        text += "/" + getUPPER_lowerTextFrom(this.baseNote.value);
                    }
                    return text;
                },
                enumerable: true,
                configurable: true
            });
            return UPPER_lowerChordNotation;
        })();
        ChordNotation.UPPER_lowerChordNotation = UPPER_lowerChordNotation;
    })(ChordNotation = Inknote.ChordNotation || (Inknote.ChordNotation = {}));
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var Drawing;
    (function (Drawing) {
        var Licence = (function () {
            function Licence() {
                this.ID = Inknote.getID();
                this.order = 100;
                this.text = "Free licence";
            }
            Licence.prototype.isOver = function (x, y, canvas) {
                var isRight = x > canvas.width - 120;
                var isLeft = x < canvas.width - 10;
                var isBelow = y > 10;
                var isAbove = y < 30;
                var result = isRight && isLeft && isBelow && isAbove;
                if (result) {
                    this.hover = true;
                }
                else {
                    this.hover = false;
                }
                return result;
            };
            Licence.prototype.draw = function (ctx, canvas) {
                ctx.fillStyle = Drawing.Colours.white;
                ctx.strokeStyle = Drawing.Colours.black;
                if (this.hover) {
                    ctx.strokeStyle = Drawing.Colours.orange;
                }
                ctx.beginPath();
                ctx.rect(canvas.width - 120, 10, 110, 20);
                ctx.lineWidth = 1;
                ctx.fill();
                ctx.stroke();
                ctx.fillStyle = Drawing.Colours.black;
                ctx.font = Drawing.Fonts.standard;
                ctx.beginPath();
                ctx.textAlign = "center";
                ctx.fillText(this.text, canvas.width - 65, 25);
                if (this.hover) {
                    ctx.beginPath();
                    ctx.font = Drawing.Fonts.small;
                    ctx.textAlign = "right";
                    ctx.fillText("Click to upgrade your licence", canvas.width - 10, 45);
                }
                return true;
            };
            return Licence;
        })();
        Drawing.Licence = Licence;
    })(Drawing = Inknote.Drawing || (Inknote.Drawing = {}));
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var Drawing;
    (function (Drawing) {
        Drawing.Fonts = {
            title: "40px Josefin Sans",
            large: "18px Josefin Sans",
            standard: "12px Josefin Sans",
            small: "10px Josefin Sans",
            watermark: "42px Josefin Sans"
        };
    })(Drawing = Inknote.Drawing || (Inknote.Drawing = {}));
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var Drawing;
    (function (Drawing) {
        Drawing.Colours = {
            white: "white",
            orange: "orange",
            lightOrange: "rgba(255,150,0,0.5)",
            // these 3 for file shading
            tan: "rgb(220, 142, 66)",
            lightTan: "rgb(240, 162, 86)",
            peach: "rgb(250, 222, 196)",
            black: "rgb(10,10,10)",
            watermarkGray: "rgba(120,120,120,0.1)",
            shadowGray: "rgba(70,70,70,0.3)",
            lightGray: "lightgray",
            gray: "darkgray",
            darkgray: "gray",
            darkerGray: "rgb(100,100,100)",
            darkestGray: "rgb(80,80,80)",
            translucentBlack: "rgba(0,0,0,0.2)",
            faintBlue: "rgb(245,245,255)",
            lightBlue: "lightblue",
            midBlue: "rgb(100,130,240)",
            negativeRed: "rgb(255, 129, 129)",
            negativeHoverRed: "rgb(255,150,150)"
        };
    })(Drawing = Inknote.Drawing || (Inknote.Drawing = {}));
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var Drawing;
    (function (Drawing) {
        var Background = (function () {
            function Background() {
                this.ID = Inknote.getID();
                this.order = -10;
                this.mouse = { x: -100, y: -100 };
                this.t = 0;
                this.spinners = [];
            }
            Object.defineProperty(Background, "Instance", {
                get: function () {
                    if (!Background._instance) {
                        Background._instance = new Background();
                    }
                    return Background._instance;
                },
                enumerable: true,
                configurable: true
            });
            Background.prototype.isOver = function (x, y, canvas) {
                this.mouse.x = x;
                this.mouse.y = y;
                return false;
            };
            Background.prototype.draw = function (ctx, canvas, scale) {
                for (var i = 0; i < canvas.width; i += 4) {
                    ctx.beginPath();
                    ctx.moveTo(i, 0);
                    // bulge around mouse?
                    //var dif = this.chase.x - i;
                    //if (dif > 0 && dif < 8) dif = 8;
                    //if (dif <= 0 && dif > -8) dif = -8;
                    //var blah = 100 / (dif);
                    //if (Math.abs(dif) < 200) {
                    //    ctx.lineTo(i, this.mouse.y - Math.abs(blah) - 20);
                    //    ctx.bezierCurveTo(i - blah, this.mouse.y, i - blah, this.mouse.y, i, this.mouse.y + Math.abs(blah) + 20);
                    //    ctx.lineTo(i, canvas.height);
                    //    ctx.
                    //}
                    //else {
                    //}
                    ctx.lineTo(i, canvas.height);
                    ctx.strokeStyle = Drawing.Colours.faintBlue;
                    ctx.stroke();
                }
                this.t++;
                // signature
                ctx.save();
                ctx.beginPath();
                ctx.translate(canvas.width / 2, canvas.height / 2);
                ctx.rotate(-Math.PI / 4);
                ctx.font = Drawing.Fonts.watermark;
                ctx.textAlign = "center";
                ctx.fillStyle = Drawing.Colours.watermarkGray;
                ctx.fillText("with ♥ - inknote", 0, 0);
                ctx.restore();
                return true;
            };
            return Background;
        })();
        Drawing.Background = Background;
    })(Drawing = Inknote.Drawing || (Inknote.Drawing = {}));
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var Drawing;
    (function (Drawing) {
        var Stave = (function () {
            function Stave(y, name) {
                this.y = y;
                this.name = name;
                this.order = 10;
                this.ID = Inknote.getID();
            }
            Stave.prototype.isOver = function (x, y) {
                return false;
            };
            Stave.prototype.draw = function (ctx, canvas) {
                if (this.name) {
                    ctx.beginPath();
                    ctx.fillStyle = Drawing.Colours.black;
                    ctx.strokeStyle = Drawing.Colours.black;
                    ctx.font = Drawing.Fonts.small;
                    ctx.fillText(this.name, 40, this.y - 5);
                }
                for (var i = 0; i < 5; i++) {
                    ctx.beginPath();
                    ctx.strokeStyle = Drawing.Colours.black;
                    ctx.moveTo(30, this.y + 10 * i);
                    ctx.lineTo(canvas.width - 30, this.y + 10 * i);
                    ctx.stroke();
                }
                return true;
            };
            return Stave;
        })();
        Drawing.Stave = Stave;
    })(Drawing = Inknote.Drawing || (Inknote.Drawing = {}));
})(Inknote || (Inknote = {}));
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Inknote;
(function (Inknote) {
    var Drawing;
    (function (Drawing) {
        var Sharp = (function (_super) {
            __extends(Sharp, _super);
            function Sharp() {
                _super.apply(this, arguments);
            }
            return Sharp;
        })(Inknote.Notation);
        Drawing.Sharp = Sharp;
    })(Drawing = Inknote.Drawing || (Inknote.Drawing = {}));
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var Drawing;
    (function (Drawing) {
        function drawFlat(ctx, x, y, lineHeight) {
            // curvy b bit
            ctx.beginPath();
            ctx.moveTo(x - lineHeight / 2, y - lineHeight / 2);
            ctx.bezierCurveTo(x + lineHeight / 2, y - lineHeight / 4, x + lineHeight / 2, y + lineHeight / 4, x - lineHeight / 2, y + lineHeight / 2);
            ctx.bezierCurveTo(x, y, x, y, x - lineHeight / 2, y - lineHeight / 2);
            ctx.fill();
            // line
            ctx.beginPath();
            ctx.moveTo(x - lineHeight / 2, y + lineHeight / 2);
            ctx.lineTo(x - lineHeight / 2, y - lineHeight * 3 / 2);
            ctx.stroke();
        }
        var Flat = (function (_super) {
            __extends(Flat, _super);
            function Flat() {
                _super.apply(this, arguments);
            }
            Flat.prototype.draw = function (ctx) {
                ctx.strokeStyle = Drawing.Colours.black;
                ctx.fillStyle = Drawing.Colours.black;
                if (this.hover) {
                    ctx.strokeStyle = Drawing.Colours.orange;
                    ctx.fillStyle = Drawing.Colours.orange;
                }
                drawFlat(ctx, this.x, this.y, 10);
                return true;
            };
            return Flat;
        })(Inknote.Notation);
        Drawing.Flat = Flat;
    })(Drawing = Inknote.Drawing || (Inknote.Drawing = {}));
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var Drawing;
    (function (Drawing) {
        function drawNote(ctx, x, y, note, lineHeight) {
            ctx.fillStyle = Drawing.Colours.black;
            ctx.strokeStyle = Drawing.Colours.black;
            if (note.select) {
                ctx.beginPath();
                ctx.arc(x, y, lineHeight, 0, 2 * Math.PI);
                ctx.strokeStyle = Drawing.Colours.orange;
                ctx.fillStyle = Drawing.Colours.orange;
                ctx.stroke();
            }
            if (note.hover) {
                ctx.strokeStyle = Drawing.Colours.orange;
                ctx.fillStyle = Drawing.Colours.orange;
            }
            if (note.noteLength == 0 /* Breve */) {
                ctx.lineWidth = 2;
                return;
            }
            //draw the note
            ctx.beginPath();
            ctx.arc(x, y, lineHeight / 2, 0, 2 * Math.PI, false);
            if (note.noteLength == 1 /* SemiBreve */) {
                ctx.lineWidth = 2;
                ctx.stroke();
                ctx.lineWidth = 1;
            }
            else {
                if (note.noteLength == 2 /* Minim */) {
                    ctx.lineWidth = 2;
                    ctx.stroke();
                    ctx.lineWidth = 1;
                }
                else {
                    ctx.fill();
                }
                //draw the stem
                ctx.beginPath();
                if (note.stemUp) {
                    ctx.moveTo(x + lineHeight / 2 - 0.5, y);
                    ctx.lineTo(x + lineHeight / 2 - 0.5, y - lineHeight * 7 / 2);
                    ctx.stroke();
                    if (note.noteLength > 3 /* Crotchet */) {
                        var tailX = x + lineHeight / 2 - 0.5;
                        var tailY = y - lineHeight * 7 / 2;
                        var tailController = note.noteLength - 3 /* Crotchet */;
                        var tailNum = 0;
                        while (tailController >= 1) {
                            ctx.beginPath();
                            ctx.moveTo(tailX, tailY);
                            ctx.bezierCurveTo(tailX + 1, tailY + 10, tailX + 15, tailY + 13, tailX + 7, tailY + 25);
                            ctx.bezierCurveTo(tailX + 13, tailY + 13, tailX, tailY + 8, tailX, tailY + 15);
                            ctx.lineTo(tailX, tailY);
                            ctx.fill();
                            ctx.stroke();
                            tailController--;
                            if (tailNum == 0) {
                                tailY += 10;
                            }
                            else if (tailNum == 1) {
                                tailY -= 20;
                            }
                            else {
                                tailY -= 10;
                            }
                            tailNum++;
                        }
                    }
                }
                else {
                    ctx.moveTo(x - lineHeight / 2 + 0.5, y);
                    ctx.lineTo(x - lineHeight / 2 + 0.5, y + lineHeight * 7 / 2);
                    ctx.stroke();
                    if (note.noteLength > 3 /* Crotchet */) {
                        var tailX = x + 0.5 - lineHeight / 2;
                        var tailY = y + lineHeight * 7 / 2;
                        var tailController = note.noteLength - 3 /* Crotchet */;
                        var tailNum = 0;
                        while (tailController >= 1) {
                            ctx.beginPath();
                            ctx.moveTo(tailX, tailY);
                            ctx.bezierCurveTo(tailX + 1, tailY - 10, tailX + 15, tailY - 13, tailX + 7, tailY - 25);
                            ctx.bezierCurveTo(tailX + 13, tailY - 13, tailX, tailY - 8, tailX, tailY - 15);
                            ctx.lineTo(tailX, tailY);
                            ctx.fill();
                            ctx.stroke();
                            tailController--;
                            if (tailNum == 0) {
                                tailY -= 10;
                            }
                            else if (tailNum == 1) {
                                tailY += 20;
                            }
                            else {
                                tailY += 10;
                            }
                            tailNum++;
                        }
                    }
                }
            }
        }
        var Note = (function (_super) {
            __extends(Note, _super);
            function Note(stemUp) {
                _super.call(this);
                this.stemUp = stemUp;
            }
            return Note;
        })(Inknote.Notation);
        Drawing.Note = Note;
        var Breve = (function (_super) {
            __extends(Breve, _super);
            function Breve() {
                _super.apply(this, arguments);
                this.noteLength = 0 /* Breve */;
            }
            Breve.prototype.draw = function (ctx) {
                drawNote(ctx, this.x, this.y, this, 10);
                return true;
            };
            return Breve;
        })(Note);
        Drawing.Breve = Breve;
        var SemiBreve = (function (_super) {
            __extends(SemiBreve, _super);
            function SemiBreve() {
                _super.apply(this, arguments);
                this.noteLength = 1 /* SemiBreve */;
            }
            SemiBreve.prototype.draw = function (ctx) {
                drawNote(ctx, this.x, this.y, this, 10);
                return true;
            };
            return SemiBreve;
        })(Note);
        Drawing.SemiBreve = SemiBreve;
        var Minim = (function (_super) {
            __extends(Minim, _super);
            function Minim() {
                _super.apply(this, arguments);
                this.noteLength = 2 /* Minim */;
            }
            Minim.prototype.draw = function (ctx) {
                drawNote(ctx, this.x, this.y, this, 10);
                return true;
            };
            return Minim;
        })(Note);
        Drawing.Minim = Minim;
        var Crotchet = (function (_super) {
            __extends(Crotchet, _super);
            function Crotchet() {
                _super.apply(this, arguments);
                this.noteLength = 3 /* Crotchet */;
            }
            Crotchet.prototype.draw = function (ctx) {
                drawNote(ctx, this.x, this.y, this, 10);
                return true;
            };
            return Crotchet;
        })(Note);
        Drawing.Crotchet = Crotchet;
        var Quaver = (function (_super) {
            __extends(Quaver, _super);
            function Quaver() {
                _super.apply(this, arguments);
                this.noteLength = 4 /* Quaver */;
            }
            Quaver.prototype.draw = function (ctx) {
                drawNote(ctx, this.x, this.y, this, 10);
                return true;
            };
            return Quaver;
        })(Note);
        Drawing.Quaver = Quaver;
        var SemiQuaver = (function (_super) {
            __extends(SemiQuaver, _super);
            function SemiQuaver() {
                _super.apply(this, arguments);
                this.noteLength = 5 /* SemiQuaver */;
            }
            SemiQuaver.prototype.draw = function (ctx) {
                drawNote(ctx, this.x, this.y, this, 10);
                return true;
            };
            return SemiQuaver;
        })(Note);
        Drawing.SemiQuaver = SemiQuaver;
        var DemiSemiQuaver = (function (_super) {
            __extends(DemiSemiQuaver, _super);
            function DemiSemiQuaver() {
                _super.apply(this, arguments);
                this.noteLength = 6 /* DemiSemiQuaver */;
            }
            DemiSemiQuaver.prototype.draw = function (ctx) {
                drawNote(ctx, this.x, this.y, this, 10);
                return true;
            };
            return DemiSemiQuaver;
        })(Note);
        Drawing.DemiSemiQuaver = DemiSemiQuaver;
        var HemiDemiSemiQuaver = (function (_super) {
            __extends(HemiDemiSemiQuaver, _super);
            function HemiDemiSemiQuaver() {
                _super.apply(this, arguments);
                this.noteLength = 7 /* HemiDemiSemiQuaver */;
            }
            HemiDemiSemiQuaver.prototype.draw = function (ctx) {
                drawNote(ctx, this.x, this.y, this, 10);
                return true;
            };
            return HemiDemiSemiQuaver;
        })(Note);
        Drawing.HemiDemiSemiQuaver = HemiDemiSemiQuaver;
    })(Drawing = Inknote.Drawing || (Inknote.Drawing = {}));
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var Drawing;
    (function (Drawing) {
        function restCommon(ctx, rest) {
            ctx.strokeStyle = Drawing.Colours.black;
            ctx.fillStyle = Drawing.Colours.black;
            if (rest.hover) {
                ctx.strokeStyle = Drawing.Colours.orange;
                ctx.fillStyle = Drawing.Colours.orange;
            }
        }
        function drawSemiBreveRest(ctx, x, y, height) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + 2 * height, y);
            ctx.lineTo(x + 2 * height, y + height / 2);
            ctx.lineTo(x, y + height / 2);
            ctx.lineTo(x, y);
            ctx.fill();
        }
        function drawMinimRest(ctx, x, y, height) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + 2 * height, y);
            ctx.lineTo(x + 2 * height, y - height / 2);
            ctx.lineTo(x, y - height / 2);
            ctx.lineTo(x, y);
            ctx.fill();
        }
        function drawCrotchetRest(ctx, x, y, height) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.quadraticCurveTo(x + height, y - height / 2, x, y - height);
            ctx.quadraticCurveTo(x + 2 * height, y, x + height / 2, y + height / 2);
            ctx.quadraticCurveTo(x - height, y + height, x + height / 2, y + 3 * height / 2);
            ctx.quadraticCurveTo(x - height / 2, y + 7 * height / 4, x, y + 5 * height / 2);
            ctx.quadraticCurveTo(x - 3 * height / 2, y + 6 * height / 4, x + height / 2, y + 3 * height / 2);
            ctx.quadraticCurveTo(x - 2 * height, y + height / 2, x, y);
            ctx.fill();
            ctx.stroke();
        }
        function drawQuaverRest(ctx, x, y, height) {
            ctx.beginPath();
            ctx.arc(x, y, height / 4, 0, 2 * Math.PI);
            ctx.fill();
            ctx.moveTo(x, y);
            ctx.bezierCurveTo(x + height / 2, y + height, x + 3 * height / 2, y + height / 2, x + 2 * height, y);
            ctx.bezierCurveTo(x + 3 * height / 2, y + height / 2, x + height / 2, y + height, x - height / 5, y + height * 0.75 / 4);
            ctx.stroke();
            ctx.fill();
            ctx.moveTo(x + 2 * height, y);
            ctx.lineTo(x, y + height * 4);
            ctx.stroke();
        }
        function drawSemiQuaverRest(ctx, x, y, height) {
            drawQuaverRest(ctx, x, y, height);
            drawQuaverRest(ctx, x - height, y + 2 * height, height);
        }
        function drawDemiSemiQuaverRest(ctx, x, y, height) {
            drawQuaverRest(ctx, x, y, height);
            drawQuaverRest(ctx, x - height, y + 2 * height, height);
            drawQuaverRest(ctx, x + height, y - 2 * height, height);
        }
        function drawHemiDemiSemiQuaverRest(ctx, x, y, height) {
            drawQuaverRest(ctx, x, y, height);
            drawQuaverRest(ctx, x - height, y + 2 * height, height);
            drawQuaverRest(ctx, x + height, y - 2 * height, height);
            drawQuaverRest(ctx, x - height * 2, y + 4 * height, height);
        }
        /* y should be middle of second top line, ideally. */
        function drawRest(ctx, x, y, duration, lineHeight) {
            ctx.strokeStyle = Drawing.Colours.black;
            ctx.fillStyle = Drawing.Colours.black;
            var height = lineHeight / 2;
            if (duration.denom == 1) {
                switch (duration.num) {
                    case 1:
                        drawCrotchetRest(ctx, x, y, height * 3 / 2);
                        break;
                    case 2:
                        drawMinimRest(ctx, x, y + 2, height * 2);
                        break;
                    case 4:
                        drawSemiBreveRest(ctx, x, y + 2, height * 2);
                        break;
                }
            }
            else {
                switch (duration.denom) {
                    case 2:
                        drawQuaverRest(ctx, x, y, height);
                        break;
                    case 4:
                        drawSemiQuaverRest(ctx, x, y, height);
                        break;
                    case 8:
                        drawDemiSemiQuaverRest(ctx, x, y, height);
                        break;
                    case 16:
                        drawHemiDemiSemiQuaverRest(ctx, x, y, height);
                        break;
                }
            }
            ctx.strokeStyle = Drawing.Colours.black;
            ctx.fillStyle = Drawing.Colours.black;
        }
        var Rest = (function (_super) {
            __extends(Rest, _super);
            function Rest() {
                _super.apply(this, arguments);
            }
            return Rest;
        })(Inknote.Notation);
        Drawing.Rest = Rest;
        var BreveRest = (function (_super) {
            __extends(BreveRest, _super);
            function BreveRest() {
                _super.apply(this, arguments);
            }
            // this is incorrect. currently draws a minim note;
            // todo: fix this.
            BreveRest.prototype.draw = function (ctx) {
                restCommon(ctx, this);
                ctx.beginPath();
                ctx.strokeStyle = Drawing.Colours.black;
                ctx.fillStyle = Drawing.Colours.black;
                ctx.rect(this.x - 5, this.y - 5, this.x + 5, this.y + 5);
                ctx.stroke();
                throw new Error("Incorrect breve rest drawing implementation");
                return true;
            };
            return BreveRest;
        })(Rest);
        Drawing.BreveRest = BreveRest;
        var SemiBreveRest = (function (_super) {
            __extends(SemiBreveRest, _super);
            function SemiBreveRest() {
                _super.apply(this, arguments);
            }
            SemiBreveRest.prototype.draw = function (ctx) {
                restCommon(ctx, this);
                drawSemiBreveRest(ctx, this.x, this.y, 5);
                return true;
            };
            return SemiBreveRest;
        })(Rest);
        Drawing.SemiBreveRest = SemiBreveRest;
        var MinimRest = (function (_super) {
            __extends(MinimRest, _super);
            function MinimRest() {
                _super.apply(this, arguments);
            }
            MinimRest.prototype.draw = function (ctx) {
                restCommon(ctx, this);
                drawMinimRest(ctx, this.x, this.y, 5);
                return true;
            };
            return MinimRest;
        })(Rest);
        Drawing.MinimRest = MinimRest;
        var CrotchetRest = (function (_super) {
            __extends(CrotchetRest, _super);
            function CrotchetRest() {
                _super.apply(this, arguments);
            }
            CrotchetRest.prototype.draw = function (ctx) {
                restCommon(ctx, this);
                drawCrotchetRest(ctx, this.x, this.y, 5);
                return true;
            };
            return CrotchetRest;
        })(Rest);
        Drawing.CrotchetRest = CrotchetRest;
        var QuaverRest = (function (_super) {
            __extends(QuaverRest, _super);
            function QuaverRest() {
                _super.apply(this, arguments);
            }
            QuaverRest.prototype.draw = function (ctx) {
                restCommon(ctx, this);
                drawQuaverRest(ctx, this.x, this.y, 5);
                return true;
            };
            return QuaverRest;
        })(Rest);
        Drawing.QuaverRest = QuaverRest;
        var SemiQuaverRest = (function (_super) {
            __extends(SemiQuaverRest, _super);
            function SemiQuaverRest() {
                _super.apply(this, arguments);
            }
            SemiQuaverRest.prototype.draw = function (ctx) {
                restCommon(ctx, this);
                drawSemiQuaverRest(ctx, this.x, this.y, 5);
                return true;
            };
            return SemiQuaverRest;
        })(Rest);
        Drawing.SemiQuaverRest = SemiQuaverRest;
        var DemiSemiQuaverRest = (function (_super) {
            __extends(DemiSemiQuaverRest, _super);
            function DemiSemiQuaverRest() {
                _super.apply(this, arguments);
            }
            DemiSemiQuaverRest.prototype.draw = function (ctx) {
                restCommon(ctx, this);
                drawDemiSemiQuaverRest(ctx, this.x, this.y, 5);
                return true;
            };
            return DemiSemiQuaverRest;
        })(Rest);
        Drawing.DemiSemiQuaverRest = DemiSemiQuaverRest;
        var HemiDemiSemiQuaverRest = (function (_super) {
            __extends(HemiDemiSemiQuaverRest, _super);
            function HemiDemiSemiQuaverRest() {
                _super.apply(this, arguments);
            }
            HemiDemiSemiQuaverRest.prototype.draw = function (ctx) {
                restCommon(ctx, this);
                drawHemiDemiSemiQuaverRest(ctx, this.x, this.y, 5);
                return true;
            };
            return HemiDemiSemiQuaverRest;
        })(Rest);
        Drawing.HemiDemiSemiQuaverRest = HemiDemiSemiQuaverRest;
    })(Drawing = Inknote.Drawing || (Inknote.Drawing = {}));
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var Drawing;
    (function (Drawing) {
        var LoadingSplash = (function () {
            function LoadingSplash() {
                this.ID = Inknote.getID();
                this.t = 0;
                this.x = 0;
                this.y = 0;
                this.order = 100;
                this.hover = false;
                this.select = false;
                this.x = 5;
                this.y = 7;
                var self = this;
                self.draw = function (ctx, canvas, scale) {
                    this.t++;
                    ctx.beginPath();
                    ctx.fillStyle = Drawing.Colours.translucentBlack;
                    ctx.rect(0, 0, canvas.width, canvas.height);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.fillStyle = "orange";
                    ctx.arc(canvas.width / 2, canvas.height / 2, 80, 0, 2 * Math.PI);
                    ctx.fill();
                    Inknote.drawTextAlongArc(ctx, "Loading", canvas.width / 2, canvas.height / 2, 90, 1);
                    ctx.beginPath();
                    ctx.fillStyle = "black";
                    ctx.arc(50 * Math.sin(self.t / 100) * Math.sin(self.t / 50) + canvas.width / 2, 50 * Math.sin(self.t / 100) * Math.cos(self.t / 50) + canvas.height / 2, 10 * Math.abs(Math.sin(self.t / 100)), 0, 2 * Math.PI);
                    ctx.arc(-50 * Math.sin(self.t / 100) * Math.sin(self.t / 50) + canvas.width / 2, -50 * Math.sin(self.t / 100) * Math.cos(-self.t / 50) + canvas.height / 2, 10 * Math.abs(Math.sin(self.t / 100)), 0, 2 * Math.PI);
                    ctx.fill();
                    return true;
                };
            }
            LoadingSplash.prototype.isOver = function (x, y) {
                return Inknote.Maths.isWithinRadius(x, y, this.x, this.y, 10);
            };
            return LoadingSplash;
        })();
        Drawing.LoadingSplash = LoadingSplash;
    })(Drawing = Inknote.Drawing || (Inknote.Drawing = {}));
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var Drawing;
    (function (Drawing) {
        var Name = (function () {
            function Name(name) {
                this.ID = Inknote.getID();
                this.x = 0;
                this.y = 0;
                this.order = 100;
                this.hover = false;
                this.select = false;
                this.name = name;
                this.x = 0;
                this.y = 0;
                var self = this;
                self.draw = function (ctx, canvas, scale) {
                    if (self.select) {
                        ctx.beginPath();
                        ctx.fillStyle = Drawing.Colours.white;
                        var width = Inknote.Managers.ProjectManager.Instance.currentProject.name.length * 30 + 100;
                        ctx.rect(canvas.width / 2 - width / 2, 60, width, 50);
                        ctx.strokeStyle = Drawing.Colours.lightOrange;
                        ctx.lineWidth = 10;
                        ctx.stroke();
                        if (this.name.length > 0) {
                            ctx.beginPath();
                            ctx.fillStyle = Drawing.Colours.black;
                            ctx.textAlign = "center";
                            ctx.fillText("Click delete to clear text", canvas.width / 2, 50);
                            ctx.fill();
                        }
                        else {
                            ctx.beginPath();
                            ctx.fillStyle = Drawing.Colours.black;
                            ctx.textAlign = "center";
                            ctx.fillText("Please type a project name", canvas.width / 2, 50);
                            ctx.fill();
                        }
                    }
                    ctx.beginPath();
                    ctx.fillStyle = Drawing.Colours.orange;
                    ctx.font = Drawing.Fonts.title;
                    ctx.textAlign = "center";
                    ctx.fillText(self.name, canvas.width / 2, 100);
                    ctx.fill();
                    if (self.hover) {
                        ctx.beginPath();
                        ctx.rect(canvas.width / 2 - 50, 105, 100, 10);
                        ctx.fill();
                        if (!self.select) {
                            ctx.beginPath();
                            ctx.font = Drawing.Fonts.small;
                            ctx.fillStyle = Drawing.Colours.black;
                            ctx.textAlign = "center";
                            ctx.fillText("Click to edit project name", canvas.width / 2, 50);
                            ctx.fill();
                        }
                    }
                    return true;
                };
            }
            Name.prototype.isOver = function (x, y, canvas) {
                return y < 100 && y > 65 && x > canvas.width / 2 - 150 && x < canvas.width / 2 + 150;
            };
            return Name;
        })();
        Drawing.Name = Name;
    })(Drawing = Inknote.Drawing || (Inknote.Drawing = {}));
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var Drawing;
    (function (Drawing) {
        var File = (function () {
            function File(name) {
                this.name = name;
                this.ID = Inknote.getID();
                this.order = 10;
                this.hover = false;
                this.select = false;
                var self = this;
                self.draw = function (ctx, canvas, scale) {
                    if (self.hover || self.select) {
                        ctx.fillStyle = Drawing.Colours.lightBlue;
                        ctx.beginPath();
                        ctx.rect(self.x - 60, self.y - 60, 120, 140);
                        ctx.fill();
                    }
                    var grd = ctx.createLinearGradient(self.x - 50, self.y - 50, self.x + 50, self.y + 50);
                    var fold = 20;
                    if (self.select) {
                        grd.addColorStop(0, Drawing.Colours.lightTan);
                        fold = 0;
                    }
                    else {
                        grd.addColorStop(0, Drawing.Colours.tan);
                    }
                    grd.addColorStop(1, Drawing.Colours.peach);
                    ctx.fillStyle = grd;
                    ctx.beginPath();
                    ctx.moveTo(self.x - 50, self.y + 50);
                    ctx.lineTo(self.x + 50, self.y + 50);
                    ctx.lineTo(self.x + 50, self.y - 50);
                    ctx.lineTo(self.x - fold, self.y - 50);
                    ctx.lineTo(self.x - 50, self.y - fold);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.moveTo(self.x - (fold + 4), self.y - 45);
                    ctx.lineTo(self.x - 45, self.y - 45);
                    ctx.lineTo(self.x - 45, self.y - (fold + 4));
                    ctx.strokeStyle = Drawing.Colours.black;
                    ctx.fillStyle = Drawing.Colours.white;
                    ctx.fill();
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.fillStyle = Drawing.Colours.black;
                    ctx.textAlign = "center";
                    ctx.fillText(self.name, self.x, self.y + 70);
                    if (self.hover) {
                        ctx.strokeStyle = Drawing.Colours.midBlue;
                        ctx.beginPath();
                        ctx.rect(self.x - 60, self.y - 60, 120, 140);
                        ctx.stroke();
                    }
                    return true;
                };
            }
            File.prototype.isOver = function (x, y) {
                if (x < this.x + 50 && x > this.x - 50) {
                    //console.log(this.x + ":" + this.y);
                    //console.log("Mouse: " + x + ":" + y);
                    return (y < this.y + 80 && y > this.y - 50);
                }
                return false;
            };
            return File;
        })();
        Drawing.File = File;
    })(Drawing = Inknote.Drawing || (Inknote.Drawing = {}));
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var Drawing;
    (function (Drawing) {
        var KeyboardKey = (function () {
            function KeyboardKey(name, x, y, width, height) {
                this.name = name;
                this.x = x;
                this.y = y;
                this.width = width;
                this.height = height;
            }
            KeyboardKey.prototype.draw = function (ctx, canvas) {
                if (this.name == "") {
                    return;
                }
                ctx.beginPath();
                ctx.rect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
                var grd = ctx.createLinearGradient(this.x - this.width / 2, this.y - this.height / 2, this.x + this.width / 2, this.y + this.height / 2);
                if (this.hover) {
                    grd.addColorStop(0, Drawing.Colours.lightBlue);
                }
                else {
                    grd.addColorStop(0, Drawing.Colours.darkestGray);
                }
                grd.addColorStop(1, Drawing.Colours.black);
                ctx.fillStyle = grd;
                ctx.fill();
                //ctx.stroke();
                ctx.beginPath();
                ctx.fillStyle = Drawing.Colours.white;
                ctx.textAlign = "center";
                ctx.font = Drawing.Fonts.large;
                ctx.fillText(this.name, this.x, this.y + 5);
            };
            KeyboardKey.prototype.isOver = function (x, y) {
                if (this.name == "") {
                    return false;
                }
                var isRight = x > this.x - this.width / 2;
                var isLeft = x < this.x + this.width / 2;
                var isDown = y > this.y - this.height / 2;
                var isUp = y < this.y + this.height / 2;
                return isRight && isLeft && isDown && isUp;
            };
            return KeyboardKey;
        })();
        Drawing.KeyboardKey = KeyboardKey;
        function keysFromString(text, x, y, totalWidth, itemHeight) {
            var charArray = text.split("");
            var keys = [];
            var itemWidth = totalWidth / charArray.length;
            var maxWidth = 10000;
            var column = 0;
            for (var i = 0; i < charArray.length; i++) {
                keys.push(new KeyboardKey(charArray[i], x + itemWidth * column + itemWidth / 2, y + itemHeight / 2, itemWidth - 2, itemHeight - 2));
                column++;
            }
            return keys;
        }
        Drawing.keysFromString = keysFromString;
        function keysFromArray(array, x, y, totalWidth, itemHeight) {
            var charArray = array;
            var keys = [];
            var itemWidth = totalWidth / charArray.length;
            var maxWidth = 10000;
            var column = 0;
            for (var i = 0; i < charArray.length; i++) {
                keys.push(new KeyboardKey(charArray[i], x + itemWidth * column + itemWidth / 2, y + itemHeight / 2, itemWidth - 2, itemHeight - 4));
                column++;
            }
            return keys;
        }
        Drawing.keysFromArray = keysFromArray;
    })(Drawing = Inknote.Drawing || (Inknote.Drawing = {}));
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var Drawing;
    (function (Drawing) {
        var Keyboard = (function () {
            function Keyboard() {
                this.ID = Inknote.getID();
                this.order = 200;
                this.cSize = { x: 0, y: 0 };
                var self = this;
                self.draw = function (ctx, canvas, scale) {
                    if (canvas.width != self.cSize.x || canvas.height != self.cSize.y) {
                        self.cSize = { x: canvas.width, y: canvas.height };
                        self.keys = [];
                        //self.keys.push(new KeyboardKey("Delete", canvas.width - 40, canvas.height / 2 + 20, 70, 30));
                        self.keys = self.keys.concat(Drawing.keysFromString("qwertyuiop", 0, canvas.height / 2 + 0 * canvas.height / 8, canvas.width, canvas.height / 8));
                        self.keys = self.keys.concat(Drawing.keysFromString("asdfghjkl-", 0, canvas.height / 2 + canvas.height / 8, canvas.width, canvas.height / 8));
                        self.keys = self.keys.concat(Drawing.keysFromString("zxcvbnm,./", 0, canvas.height / 2 + 2 * canvas.height / 8, canvas.width, canvas.height / 8));
                        self.keys = self.keys.concat(Drawing.keysFromArray(["|<", " ", " ", " ", "Delete"], 0, canvas.height / 2 + 3 * canvas.height / 8, canvas.width, canvas.height / 8));
                    }
                    else {
                    }
                    ctx.font = Drawing.Fonts.standard;
                    ctx.lineWidth = 1;
                    ctx.strokeStyle = Drawing.Colours.black;
                    ctx.beginPath();
                    var grd = ctx.createLinearGradient(0, canvas.height / 2, canvas.width / 2, canvas.height);
                    grd.addColorStop(0, Drawing.Colours.darkestGray);
                    grd.addColorStop(1, Drawing.Colours.darkerGray);
                    ctx.fillStyle = grd;
                    ctx.rect(0, canvas.height / 2, canvas.width, canvas.height / 2);
                    ctx.fill();
                    for (var i = 0; i < self.keys.length; i++) {
                        self.keys[i].draw(ctx, canvas);
                    }
                    return true;
                };
            }
            Object.defineProperty(Keyboard, "Instance", {
                get: function () {
                    if (!Keyboard._instance) {
                        Keyboard._instance = new Keyboard();
                    }
                    return Keyboard._instance;
                },
                enumerable: true,
                configurable: true
            });
            Keyboard.prototype.isOver = function (x, y, canvas) {
                var result = false;
                for (var i = 0; i < this.keys.length; i++) {
                    if (this.keys[i].isOver(x, y)) {
                        this.keys[i].hover = true;
                        result = true;
                    }
                    else {
                        this.keys[i].hover = false;
                    }
                }
                return result;
            };
            Keyboard.prototype.click = function (e) {
                var inst = Inknote.Managers.ProjectManager.Instance;
                var proj = inst.currentProject;
                for (var i = 0; i < this.keys.length; i++) {
                    if (this.keys[i].isOver(e.clientX, e.clientY - 50)) {
                        if (this.keys[i].name == "Delete") {
                            if (inst.selectID == proj.ID) {
                                proj.name = "";
                            }
                        }
                        else if (this.keys[i].name == "|<") {
                            if (inst.selectID == proj.ID) {
                                proj.name = proj.name.substr(0, proj.name.length - 1);
                            }
                        }
                        else {
                            console.log(this.keys[i].name);
                            proj.name = Inknote.pascalCase(proj.name + this.keys[i].name);
                        }
                    }
                }
            };
            return Keyboard;
        })();
        Drawing.Keyboard = Keyboard;
    })(Drawing = Inknote.Drawing || (Inknote.Drawing = {}));
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var Drawing;
    (function (Drawing) {
        var BottomMenuButton = (function () {
            function BottomMenuButton(text, x, y, width, height, clicker, negative) {
                this.negative = negative;
                this.text = text;
                this.x = x;
                this.y = y;
                this.width = width;
                this.height = height;
                this.click = clicker;
            }
            BottomMenuButton.prototype.isOver = function (x, y) {
                var isRight = x >= this.x;
                var isLeft = x <= this.x + this.width;
                var isUp = y <= this.y + this.height;
                var isDown = y >= this.y;
                return isRight && isLeft && isUp && isDown;
            };
            BottomMenuButton.prototype.draw = function (ctx) {
                ctx.beginPath();
                var grd = ctx.createLinearGradient(this.x, this.y, this.x + this.width, this.y + this.height);
                if (this.hover) {
                    grd.addColorStop(0, Drawing.Colours.lightBlue);
                }
                else {
                    grd.addColorStop(0, Drawing.Colours.gray);
                }
                grd.addColorStop(1, Drawing.Colours.white);
                ctx.fillStyle = grd;
                if (this.negative) {
                    ctx.fillStyle = Drawing.Colours.negativeRed;
                    if (this.hover) {
                        ctx.fillStyle = Drawing.Colours.negativeHoverRed;
                    }
                }
                ctx.rect(this.x, this.y, this.width, this.height);
                ctx.fill();
                if (this.hover) {
                    ctx.strokeStyle = Drawing.Colours.white;
                    ctx.stroke();
                }
                ctx.beginPath();
                ctx.fillStyle = Drawing.Colours.black;
                ctx.textAlign = "center";
                ctx.fillText(this.text, this.x + this.width / 2, this.y + this.height / 2 + 5);
                ctx.fill();
            };
            return BottomMenuButton;
        })();
        Drawing.BottomMenuButton = BottomMenuButton;
        function createMenuFromArray(items, x, y, width, height) {
            var correctItems = [];
            var result = [];
            for (var i = 0; i < items.length; i++) {
                var o = items[i];
                if (!o.click || !o.text) {
                    Inknote.log("bad item in menu array");
                    continue;
                }
                correctItems.push(o);
            }
            var itemCount = correctItems.length;
            var singleWidth = width / itemCount;
            var column = 0;
            for (var i = 0; i < correctItems.length; i++) {
                result.push(new BottomMenuButton(correctItems[i].text, column * singleWidth + singleWidth / 20, y + height / 10, singleWidth - 2 * singleWidth / 20, 8 * height / 10, correctItems[i].click, correctItems[i].negative));
                column++;
            }
            return result;
        }
        Drawing.createMenuFromArray = createMenuFromArray;
    })(Drawing = Inknote.Drawing || (Inknote.Drawing = {}));
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var Drawing;
    (function (Drawing) {
        var BottomMenu = (function () {
            function BottomMenu() {
                this.ID = Inknote.getID();
                this.order = 150;
                this.buttons = [];
                var self = this;
                self.draw = function (ctx, canvas, scale) {
                    if (self.buttons.length < 1) {
                        self.buttons = Drawing.createMenuFromArray([
                            {
                                text: "Open",
                                click: function () {
                                    Inknote.Managers.ProjectManager.Instance.openSelectedProject();
                                }
                            },
                            {
                                text: "<",
                                click: function () {
                                    Inknote.Managers.ProjectManager.Instance.previous();
                                }
                            },
                            {
                                text: ">",
                                click: function () {
                                    Inknote.Managers.ProjectManager.Instance.next();
                                }
                            },
                            {
                                text: "Delete",
                                click: function () {
                                    var inst = Inknote.Managers.ProjectManager.Instance;
                                    inst.deleteSelectedProject();
                                },
                                negative: true
                            }
                        ], 0, canvas.height - 100, canvas.width, 100);
                    }
                    else {
                        this.resizeButtons(canvas);
                    }
                    ctx.beginPath();
                    ctx.fillStyle = "black";
                    ctx.rect(0, canvas.height - 100, canvas.width, 100);
                    ctx.fill();
                    for (var i = 0; i < self.buttons.length; i++) {
                        self.buttons[i].draw(ctx);
                    }
                    return true;
                };
            }
            Object.defineProperty(BottomMenu, "Instance", {
                get: function () {
                    if (!BottomMenu._instance) {
                        BottomMenu._instance = new BottomMenu();
                    }
                    return BottomMenu._instance;
                },
                enumerable: true,
                configurable: true
            });
            BottomMenu.prototype.isOver = function (x, y, canvas) {
                for (var i = 0; i < this.buttons.length; i++) {
                    if (this.buttons[i].isOver(x, y)) {
                        this.buttons[i].hover = true;
                    }
                    else {
                        this.buttons[i].hover = false;
                    }
                }
                return y > canvas.height - 100;
            };
            BottomMenu.prototype.click = function (e) {
                var inst = Inknote.Managers.ProjectManager.Instance;
                var proj = inst.currentProject;
                for (var i = 0; i < this.buttons.length; i++) {
                    if (this.buttons[i].isOver(e.clientX, e.clientY - 50)) {
                        this.buttons[i].click();
                        e.preventDefault();
                    }
                }
            };
            BottomMenu.prototype.resizeButtons = function (canvas) {
                var btns = this.buttons;
                var itemCount = btns.length;
                var singleWidth = canvas.width / itemCount;
                var column = 0;
                var height = 100;
                for (var i = 0; i < btns.length; i++) {
                    btns[i].x = column * singleWidth + singleWidth / 20;
                    btns[i].y = canvas.height - 100 + height / 10;
                    btns[i].width = singleWidth - 2 * singleWidth / 20;
                    btns[i].height = 8 * height / 10;
                    column++;
                }
            };
            return BottomMenu;
        })();
        Drawing.BottomMenu = BottomMenu;
    })(Drawing = Inknote.Drawing || (Inknote.Drawing = {}));
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var Drawing;
    (function (Drawing) {
        var ScoreMenu = (function () {
            function ScoreMenu() {
                this.ID = Inknote.getID();
                this.order = 150;
                var self = this;
                self.draw = function (ctx, canvas, scale) {
                    return true;
                };
            }
            Object.defineProperty(ScoreMenu, "Instance", {
                get: function () {
                    if (!ScoreMenu._instance) {
                        ScoreMenu._instance = new ScoreMenu();
                    }
                    return ScoreMenu._instance;
                },
                enumerable: true,
                configurable: true
            });
            return ScoreMenu;
        })();
        Drawing.ScoreMenu = ScoreMenu;
    })(Drawing = Inknote.Drawing || (Inknote.Drawing = {}));
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var Drawing;
    (function (Drawing) {
        var ChordSymbol = (function (_super) {
            __extends(ChordSymbol, _super);
            function ChordSymbol() {
                _super.apply(this, arguments);
            }
            ChordSymbol.prototype.draw = function (ctx) {
                // displays chord in correct manner.
                var theChord = this.standardChord;
                var displayChord = Inknote.getCurrentChordNotation(theChord.baseNote, theChord.rootNote, theChord.minor, theChord.annotations);
                var text = displayChord.name;
                ctx.beginPath();
                ctx.fillStyle = Drawing.Colours.black;
                ctx.strokeStyle = Drawing.Colours.black;
                ctx.textAlign = "center";
                ctx.fillText(text, this.x, this.y);
                return true;
            };
            return ChordSymbol;
        })(Inknote.Notation);
        Drawing.ChordSymbol = ChordSymbol;
    })(Drawing = Inknote.Drawing || (Inknote.Drawing = {}));
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var Drawing;
    (function (Drawing) {
        var ScrollBar;
        (function (_ScrollBar) {
            var ScrollBar = (function () {
                function ScrollBar() {
                    this.ID = Inknote.getID();
                    this.y = 50;
                    this.width = 30;
                    this.order = 200;
                    this.buttonHeight = 20;
                    this.scrollThumbnail = new _ScrollBar.ScrollThumbnail();
                }
                ScrollBar.prototype.click = function (e) {
                    if (e.clientY < 50 + this.y + this.buttonHeight) {
                        Inknote.ScrollService.Instance.up();
                    }
                    else if (e.clientY > 50 + this.y + this.height - this.buttonHeight) {
                        Inknote.ScrollService.Instance.down();
                    }
                    else {
                    }
                };
                ScrollBar.prototype.isOver = function (x, y) {
                    var isRight = x > this.x;
                    var isLeft = x < this.x + this.width;
                    var isBelow = y > this.y;
                    var isAbove = y < this.y + this.height;
                    var result = isRight && isLeft && isBelow && isAbove;
                    this.isOverTopButton = false;
                    this.isOverBottomButton = false;
                    this.isOverMiddle = false;
                    if (result) {
                        if (y < this.y + this.buttonHeight) {
                            this.scrollThumbnail.visible = false;
                            this.isOverTopButton = true;
                        }
                        else if (y > this.y + this.height - this.buttonHeight) {
                            this.isOverBottomButton = true;
                            this.scrollThumbnail.visible = false;
                        }
                        else {
                            this.isOverMiddle = true;
                            this.scrollThumbnail.visible = true;
                            this.scrollThumbnail.y = y;
                            this.scrollThumbnail.x = this.x - 3 - this.scrollThumbnail.width;
                        }
                    }
                    this.hover = result;
                    return result;
                };
                ScrollBar.prototype.draw = function (ctx, canvas) {
                    this.x = canvas.width - this.width;
                    this.height = canvas.height - this.y;
                    ctx.beginPath();
                    ctx.clearRect(this.x, this.y, this.width, this.height);
                    ctx.fillStyle = Drawing.Colours.lightBlue;
                    if (this.isOverMiddle) {
                        ctx.beginPath();
                        ctx.rect(this.x, this.y + this.buttonHeight, this.width, this.height - 2 * this.buttonHeight);
                        ctx.fill();
                    }
                    ctx.beginPath();
                    ctx.strokeStyle = Drawing.Colours.black;
                    ctx.moveTo(this.x, this.y + this.buttonHeight);
                    ctx.lineTo(this.x, canvas.height - this.buttonHeight);
                    ctx.stroke();
                    // top button
                    ctx.beginPath();
                    ctx.rect(this.x, this.y, this.width, this.buttonHeight);
                    ctx.moveTo(this.x + this.width / 2, this.y + this.buttonHeight * 2 / 3);
                    ctx.lineTo(this.x + this.width / 2, this.y + this.buttonHeight * 1 / 3);
                    ctx.moveTo(this.x + this.width / 2 + 3, this.y + this.buttonHeight / 2);
                    ctx.lineTo(this.x + this.width / 2, this.y + this.buttonHeight * 1 / 3);
                    ctx.moveTo(this.x + this.width / 2 - 3, this.y + this.buttonHeight / 2);
                    ctx.lineTo(this.x + this.width / 2, this.y + this.buttonHeight * 1 / 3);
                    if (this.isOverTopButton) {
                        ctx.fill();
                    }
                    ctx.stroke();
                    // bottom button
                    ctx.beginPath();
                    ctx.rect(this.x, canvas.height - this.buttonHeight, this.width, this.buttonHeight);
                    ctx.moveTo(this.x + this.width / 2, canvas.height - this.buttonHeight * 2 / 3);
                    ctx.lineTo(this.x + this.width / 2, canvas.height - this.buttonHeight * 1 / 3);
                    ctx.moveTo(this.x + this.width / 2 + 3, canvas.height - this.buttonHeight / 2);
                    ctx.lineTo(this.x + this.width / 2, canvas.height - this.buttonHeight * 1 / 3);
                    ctx.moveTo(this.x + this.width / 2 - 3, canvas.height - this.buttonHeight / 2);
                    ctx.lineTo(this.x + this.width / 2, canvas.height - this.buttonHeight * 1 / 3);
                    if (this.isOverBottomButton) {
                        ctx.fill();
                    }
                    ctx.stroke();
                    return true;
                };
                return ScrollBar;
            })();
            _ScrollBar.ScrollBar = ScrollBar;
        })(ScrollBar = Drawing.ScrollBar || (Drawing.ScrollBar = {}));
    })(Drawing = Inknote.Drawing || (Inknote.Drawing = {}));
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var Drawing;
    (function (Drawing) {
        var ScrollBar;
        (function (ScrollBar) {
            var FileScroll = (function (_super) {
                __extends(FileScroll, _super);
                function FileScroll() {
                    _super.apply(this, arguments);
                }
                return FileScroll;
            })(ScrollBar.ScrollBar);
            ScrollBar.FileScroll = FileScroll;
        })(ScrollBar = Drawing.ScrollBar || (Drawing.ScrollBar = {}));
    })(Drawing = Inknote.Drawing || (Inknote.Drawing = {}));
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var Drawing;
    (function (Drawing) {
        var ScrollBar;
        (function (ScrollBar) {
            var ScrollThumbnail = (function () {
                function ScrollThumbnail() {
                    this.ID = Inknote.getID();
                    this.width = 80;
                    this.height = 100;
                    this.invert = false;
                    this.visible = false;
                    this.order = 201;
                }
                ScrollThumbnail.prototype.click = function (e) {
                    alert("Scroll thumb");
                };
                ScrollThumbnail.prototype.isOver = function (x, y) {
                    var isRight = x > this.x;
                    var isLeft = x < this.x + this.width;
                    var isBelow = y > this.y;
                    var isAbove = y < this.y + this.height;
                    var result = isRight && isLeft && isBelow && isAbove;
                    return result;
                };
                ScrollThumbnail.prototype.draw = function (ctx, canvas) {
                    if (this.y + this.height > canvas.height) {
                        this.invert = true;
                    }
                    else {
                        this.invert = false;
                    }
                    var y = this.invert ? this.y - this.height : this.y;
                    var height = this.height;
                    var farLeft = this.x;
                    ctx.strokeStyle = Drawing.Colours.black;
                    ctx.fillStyle = Drawing.Colours.white;
                    ctx.lineWidth = 2;
                    if (this.invert) {
                        ctx.beginPath();
                        ctx.moveTo(farLeft, y);
                        ctx.lineTo(farLeft, y + this.height);
                        ctx.lineTo(farLeft + this.width + 10, y + this.height);
                        ctx.lineTo(farLeft + this.width, y + this.height - 5);
                        ctx.lineTo(farLeft + this.width, y);
                        ctx.lineTo(farLeft, y);
                        ctx.fill();
                        ctx.stroke();
                    }
                    else {
                        ctx.beginPath();
                        ctx.moveTo(farLeft, y);
                        ctx.lineTo(farLeft + this.width + 10, y);
                        ctx.lineTo(farLeft + this.width, y + 5);
                        ctx.lineTo(farLeft + this.width, y + height);
                        ctx.lineTo(farLeft, y + height);
                        ctx.lineTo(farLeft, y);
                        ctx.fill();
                        ctx.stroke();
                    }
                    ctx.lineWidth = 1;
                    return true;
                };
                return ScrollThumbnail;
            })();
            ScrollBar.ScrollThumbnail = ScrollThumbnail;
        })(ScrollBar = Drawing.ScrollBar || (Drawing.ScrollBar = {}));
    })(Drawing = Inknote.Drawing || (Inknote.Drawing = {}));
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var Drawing;
    (function (Drawing) {
        var ScrollBar;
        (function (ScrollBar) {
            var ProjectDcroll = (function (_super) {
                __extends(ProjectDcroll, _super);
                function ProjectDcroll() {
                    _super.apply(this, arguments);
                    this.width = 30;
                }
                return ProjectDcroll;
            })(ScrollBar.ScrollBar);
            ScrollBar.ProjectDcroll = ProjectDcroll;
        })(ScrollBar = Drawing.ScrollBar || (Drawing.ScrollBar = {}));
    })(Drawing = Inknote.Drawing || (Inknote.Drawing = {}));
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var Drawing;
    (function (Drawing) {
        var RightClickMenus;
        (function (RightClickMenus) {
            var ClickableMenuItem = (function () {
                function ClickableMenuItem(text, click) {
                    this.text = text;
                    this.click = click;
                }
                return ClickableMenuItem;
            })();
            RightClickMenus.ClickableMenuItem = ClickableMenuItem;
            var RightClickMenu = (function () {
                function RightClickMenu() {
                    this.ID = Inknote.getID();
                    this.width = 100;
                    this.order = 500;
                    this.items = [];
                    this.items.push(new ClickableMenuItem("lol", function () {
                    }));
                    this.items.push(new ClickableMenuItem("ha", function () {
                    }));
                }
                Object.defineProperty(RightClickMenu.prototype, "height", {
                    get: function () {
                        return this.items.length * 25;
                    },
                    enumerable: true,
                    configurable: true
                });
                RightClickMenu.prototype.draw = function (ctx, canvas) {
                    ctx.beginPath();
                    ctx.fillStyle = Drawing.Colours.shadowGray;
                    ctx.rect(this.x + 4, this.y + 3, this.width, this.height);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.fillStyle = Drawing.Colours.white;
                    ctx.strokeStyle = Drawing.Colours.black;
                    ctx.rect(this.x, this.y, this.width, this.height);
                    ctx.fill();
                    ctx.stroke();
                    for (var i = 0; i < this.items.length; i++) {
                        ctx.beginPath();
                        var itemBottom = (i + 1) * 25 + this.y;
                        var textHeight = itemBottom - 8;
                        ctx.font = Drawing.Fonts.standard;
                        ctx.textAlign = "center";
                        ctx.fillStyle = Drawing.Colours.black;
                        ctx.fillText(this.items[i].text, this.x + this.width / 2, textHeight);
                        if (i > 0) {
                            ctx.beginPath();
                            ctx.moveTo(this.x, itemBottom);
                            ctx.lineTo(this.x + this.width, itemBottom);
                            ctx.stroke();
                        }
                    }
                    return true;
                };
                RightClickMenu.prototype.isOver = function (x, y) {
                    var isRight = x > this.x;
                    var isLeft = x < this.x + this.width;
                    var isBelow = y > this.y;
                    var isAbove = y < this.y + this.height;
                    var result = isRight && isLeft && isBelow && isAbove;
                    return result;
                };
                return RightClickMenu;
            })();
            RightClickMenus.RightClickMenu = RightClickMenu;
        })(RightClickMenus = Drawing.RightClickMenus || (Drawing.RightClickMenus = {}));
    })(Drawing = Inknote.Drawing || (Inknote.Drawing = {}));
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var Storage;
    (function (Storage) {
        var defaults = {
            settings: "settings",
            projects: "projects"
        };
        function getLocal(key) {
            if (!localStorage) {
                Inknote.log("Local storage is undefined");
                return null;
            }
            return JSON.parse(localStorage.getItem("inknote-" + key));
        }
        function saveLocal(key, item) {
            if (Inknote.Managers.SettingsManager.Current.testMode) {
                return;
            }
            if (!localStorage) {
                Inknote.log("Local storage is undefined");
                return null;
            }
            localStorage.setItem("inknote-" + key, JSON.stringify(item));
        }
        function getSettings() {
            if (Inknote.Managers.SettingsManager.Current.testMode) {
                return [];
            }
            var result = getLocal(defaults.settings);
            if (result instanceof Array === true && Inknote.allItemsAre(result, function (item) {
                return item instanceof Inknote.Setting;
            })) {
                return result;
            }
            Inknote.log("localStorage settings are not saved in the correct format");
            return [];
        }
        Storage.getSettings = getSettings;
        function getProjects() {
            if (Inknote.Managers.SettingsManager.Current.testMode) {
                return [Inknote.Testing.$TEST$_compressedProject];
            }
            var result = getLocal(defaults.projects);
            if (result instanceof Array === true && Inknote.allItemsAre(result, function (item) {
                return !!item.ID && !!item.name;
            })) {
                return result;
            }
            Inknote.log("localStorage projects are not saved in the correct format");
            return [];
        }
        Storage.getProjects = getProjects;
        function saveProjects(projects) {
            saveLocal(defaults.projects, projects);
        }
        Storage.saveProjects = saveProjects;
    })(Storage = Inknote.Storage || (Inknote.Storage = {}));
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    function check(text, onTrue, onFalse) {
        if (confirm(text)) {
            onTrue();
            return;
        }
        onFalse();
    }
    Inknote.check = check;
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    (function (MessageType) {
        MessageType[MessageType["Error"] = 0] = "Error";
        MessageType[MessageType["Text"] = 1] = "Text";
    })(Inknote.MessageType || (Inknote.MessageType = {}));
    var MessageType = Inknote.MessageType;
    function log(message, msgType) {
        console.log(message);
    }
    Inknote.log = log;
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    function getIndexFromID(items, ID) {
        for (var i = 0; i < items.length; i++) {
            if (items[i].ID == ID) {
                return i;
            }
        }
        return null;
    }
    Inknote.getIndexFromID = getIndexFromID;
    function getItemFromID(items, ID) {
        for (var i = 0; i < items.length; i++) {
            if (items[i].ID == ID) {
                return items[i];
            }
        }
        return null;
    }
    Inknote.getItemFromID = getItemFromID;
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var ScrollService = (function () {
        function ScrollService() {
            this.x = 0;
            this.y = 0;
            this.scrollSpeed = 30;
        }
        Object.defineProperty(ScrollService, "Instance", {
            get: function () {
                if (!ScrollService._instance) {
                    ScrollService._instance = new ScrollService();
                }
                return ScrollService._instance;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScrollService, "ScrollBar", {
            get: function () {
                if (Inknote.Managers.PageManager.Current.page != ScrollService._lastPageType) {
                    ScrollService._lastPageType = Inknote.Managers.PageManager.Current.page;
                    switch (ScrollService._lastPageType) {
                        case 2 /* File */:
                            ScrollService._scrollBar = new Inknote.Drawing.ScrollBar.FileScroll();
                            break;
                        case 0 /* Score */:
                            ScrollService._scrollBar = new Inknote.Drawing.ScrollBar.ProjectDcroll();
                            break;
                        case 1 /* Form */:
                        case 3 /* List */:
                        default:
                            ScrollService._scrollBar = new Inknote.Drawing.ScrollBar.ScrollBar();
                    }
                }
                return ScrollService._scrollBar;
            },
            enumerable: true,
            configurable: true
        });
        ScrollService.prototype.up = function () {
            if (Inknote.canScroll(true)) {
                this.y = this.y - this.scrollSpeed;
            }
        };
        ScrollService.prototype.down = function () {
            if (Inknote.canScroll(false)) {
                this.y = Math.max(0, this.scrollSpeed + this.y);
            }
        };
        return ScrollService;
    })();
    Inknote.ScrollService = ScrollService;
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var LicenceService = (function () {
        function LicenceService() {
            this.drawing = new Inknote.Drawing.Licence();
        }
        Object.defineProperty(LicenceService, "Instance", {
            get: function () {
                if (!LicenceService._instance) {
                    LicenceService._instance = new LicenceService();
                }
                return LicenceService._instance;
            },
            enumerable: true,
            configurable: true
        });
        return LicenceService;
    })();
    Inknote.LicenceService = LicenceService;
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    function sortByOrder(items) {
        items.sort(function (a, b) {
            return (a.order - b.order);
        });
        return items;
    }
    Inknote.sortByOrder = sortByOrder;
    function mouseIsOver(item, me, canvas) {
        var scroll = Inknote.ScrollService.Instance;
        //console.log("item: (" + item.x + "," + item.y + ")");
        //console.log("mouse: (" + me.clientX + "," + me.clientY + ")");
        return item.isOver(me.clientX - scroll.x, me.clientY - 50, canvas);
    }
    Inknote.mouseIsOver = mouseIsOver;
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var RightClickMenuService = (function () {
        function RightClickMenuService() {
        }
        Object.defineProperty(RightClickMenuService, "Instance", {
            get: function () {
                if (!RightClickMenuService._instance) {
                    RightClickMenuService._instance = new RightClickMenuService();
                }
                return RightClickMenuService._instance;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RightClickMenuService.prototype, "Menu", {
            get: function () {
                if (!this._menu) {
                    this._menu = new Inknote.Drawing.RightClickMenus.RightClickMenu();
                }
                return this._menu;
            },
            enumerable: true,
            configurable: true
        });
        RightClickMenuService.prototype.openMenu = function (x, y, canvas) {
            var newMenu = new Inknote.Drawing.RightClickMenus.RightClickMenu();
            var tooFarRight = canvas.width > (x + newMenu.width);
            newMenu.x = tooFarRight ? x : x - newMenu.width;
            newMenu.y = canvas.height > (y + newMenu.height) ? y : y - newMenu.height;
            RightClickMenuService.Instance._menu = newMenu;
            this.visible = true;
        };
        return RightClickMenuService;
    })();
    Inknote.RightClickMenuService = RightClickMenuService;
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var DrawService = (function () {
        function DrawService(canvasID) {
            this._items = [];
            this._canvas = document.getElementById(canvasID);
            this._ctx = this._canvas.getContext("2d");
            var self = this;
            this.draw = function () {
                self._canvas.width = self._canvas.parentElement.clientWidth;
                self._canvas.height = self._canvas.parentElement.clientHeight - 50;
                self.arrange();
                self._items.push(Inknote.LicenceService.Instance.drawing);
                if (Inknote.Managers.MachineManager.Instance.machineType == 0 /* Desktop */) {
                    self._items.push(Inknote.ScrollService.ScrollBar);
                    if (Inknote.ScrollService.ScrollBar.scrollThumbnail.visible) {
                        self._items.push(Inknote.ScrollService.ScrollBar.scrollThumbnail);
                    }
                }
                if (Inknote.RightClickMenuService.Instance.visible) {
                    self._items.push(Inknote.RightClickMenuService.Instance.Menu);
                }
                Inknote.sortByOrder(self._items);
                for (var i = 0; i < self._items.length; i++) {
                    if (self._items[i].draw(self._ctx, self._canvas) === false) {
                        Inknote.log("Drawing failed on item " + self._items[i].ID);
                        return;
                    }
                }
                requestAnimationFrame(self.draw);
            };
            self.draw();
        }
        DrawService.prototype.setItems = function (items) {
            this._items = items;
        };
        Object.defineProperty(DrawService.prototype, "canvas", {
            get: function () {
                return this._canvas;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DrawService.prototype, "items", {
            get: function () {
                return this._items;
            },
            enumerable: true,
            configurable: true
        });
        DrawService.prototype.arrange = function () {
            switch (Inknote.Managers.PageManager.Current.page) {
                case 0 /* Score */:
                    this._items = Inknote.ProjectConverter.toDrawing(this);
                    break;
                case 2 /* File */:
                    this._items = Inknote.FileConverter.toDrawing(this);
                    break;
            }
            this.items.push(Inknote.Drawing.Background.Instance);
        };
        return DrawService;
    })();
    Inknote.DrawService = DrawService;
})(Inknote || (Inknote = {}));
// this file is for drawing score.
var Inknote;
(function (Inknote) {
    // will store all score drawable items and update when necessary.
    var ScoringService = (function () {
        function ScoringService() {
            this._refresh = false;
        }
        Object.defineProperty(ScoringService, "Instance", {
            get: function () {
                if (!ScoringService._instance) {
                    ScoringService._instance = new ScoringService();
                }
                return ScoringService._instance;
            },
            enumerable: true,
            configurable: true
        });
        // should refresh on:
        // change of window size.
        // change of project -- Done in here inside getItems().
        // change of score.
        // (but not on change of hover/select
        // -- that should be handled in individual objects).
        ScoringService.prototype.refresh = function () {
            this._refresh = true;
        };
        ScoringService.prototype.updateItems = function () {
            // put updating logic in here.
            var currentProject = Inknote.Managers.ProjectManager.Instance.currentProject;
            this._projectID = currentProject.ID;
        };
        ScoringService.prototype.getItems = function () {
            if (this._projectID != Inknote.Managers.ProjectManager.Instance.currentProject.ID) {
                this.refresh();
            }
            if (this._refresh) {
                // get items from project
                this.updateItems();
            }
            this._refresh = false;
            return this._items;
        };
        return ScoringService;
    })();
    Inknote.ScoringService = ScoringService;
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var ProjectConverter;
    (function (ProjectConverter) {
        var splash = new Inknote.Drawing.LoadingSplash();
        var name = new Inknote.Drawing.Name("");
        var flat1 = new Inknote.Drawing.Flat();
        var flat2 = new Inknote.Drawing.Flat();
        flat1.y = 190;
        flat2.y = 195;
        flat1.x = 100;
        flat2.x = 110;
        var crchtRest = new Inknote.Drawing.CrotchetRest();
        crchtRest.y = 200;
        crchtRest.x = 120;
        var qvrRest = new Inknote.Drawing.QuaverRest();
        qvrRest.y = 200;
        qvrRest.x = 130;
        var qvr = new Inknote.Drawing.Quaver(false);
        qvr.x = 150;
        qvr.y = 200;
        var hdsqvr = new Inknote.Drawing.HemiDemiSemiQuaver(true);
        hdsqvr.x = 190;
        hdsqvr.y = 200;
        function toDrawing(drawer) {
            var project = Inknote.Managers.ProjectManager.Instance.currentProject;
            var items = [];
            if (!project) {
                items.push(splash);
                return items;
            }
            name.name = project.name;
            name.ID = project.ID;
            name.hover = name.ID == Inknote.Managers.ProjectManager.Instance.hoverID;
            name.select = name.ID == Inknote.Managers.ProjectManager.Instance.selectID;
            if (name.select && Inknote.Managers.MachineManager.Instance.machineType != 0 /* Desktop */) {
                items.push(Inknote.Drawing.Keyboard.Instance);
            }
            var staveGroup = Inknote.getItemsWhere(project.instruments, function (instrument) {
                return instrument.visible;
            });
            var startHeight = 180;
            for (var i = 0; i < staveGroup.length; i++) {
                items.push(new Inknote.Drawing.Stave(startHeight, staveGroup[i].name));
                startHeight += 80;
            }
            items.push(name);
            items.push(flat1);
            items.push(flat2);
            items.push(crchtRest);
            items.push(qvrRest);
            items.push(qvr);
            items.push(hdsqvr);
            if (project.pause) {
                items.push(splash);
            }
            return items;
        }
        ProjectConverter.toDrawing = toDrawing;
        function compress(project) {
            var compressed = new Inknote.Compressed.CompressedProject(project.name);
            compressed.ID = project.ID;
            compressed.name = project.name;
            for (var i = 0; i < project.instruments.length; i++) {
                compressed.instruments.push(compressInstrument(project.instruments[i]));
            }
            return compressed;
        }
        ProjectConverter.compress = compress;
        function compressInstrument(instrument) {
            var result = new Inknote.Compressed.Instrument(instrument.name);
            for (var i = 0; i < instrument.bars.length; i++) {
                result.bars.push(compressBar(instrument.bars[i]));
            }
            return result;
        }
        function compressBar(bar) {
            var result = new Inknote.Compressed.Bar();
            return result;
        }
        function compressChord(chord) {
            var notes = [];
            for (var i = 0; i < chord.notes.length; i++) {
                var fullNote = chord.notes[i];
                var cmprsdNote = new Inknote.Compressed.CompressedNote(fullNote.value, fullNote.octave, fullNote.length);
                notes.push(cmprsdNote);
            }
            var result = new Inknote.Compressed.CompressedChord(notes);
            return result;
        }
        function compressNote(note) {
            var result = new Inknote.Compressed.CompressedNote(note.value, note.octave, note.length);
            return result;
        }
        function compressAll(projects) {
            var result = [];
            for (var i = 0; i < projects.length; i++) {
                var compressed = compress(projects[i]);
                result.push(compressed);
            }
            return result;
        }
        ProjectConverter.compressAll = compressAll;
        function decompress(project) {
            var result = new Inknote.Project(project.name);
            result.ID = project.ID;
            result.instruments = [];
            for (var i = 0; i < project.instruments.length; i++) {
                result.instruments.push(decompressInstrument(project.instruments[i]));
            }
            return result;
        }
        ProjectConverter.decompress = decompress;
        function decompressInstrument(instrument) {
            var result = new Inknote.Model.Instrument(instrument.name);
            result.visible = true;
            for (var i = 0; i < instrument.bars.length; i++) {
                result.bars.push(decompressBar(instrument.bars[i]));
            }
            return result;
        }
        function decompressBar(bar) {
            var result = new Inknote.Model.Bar();
            return result;
        }
        function decompressChord(chord) {
            var notes = [];
            for (var i = 0; i < chord.notes.length; i++) {
                var theNote = chord.notes[i];
                var realNote = new Inknote.Model.Note(theNote.value, theNote.octave, theNote.length);
                notes.push(realNote);
            }
            var result = new Inknote.Model.Chord(notes);
            return result;
        }
        function decompressNote(note) {
            var result = new Inknote.Model.Note(note.value, note.octave, note.length);
            return result;
        }
        function decompressAll(projects) {
            var result = [];
            for (var i = 0; i < projects.length; i++) {
                var decompressed = decompress(projects[i]);
                result.push(decompressed);
            }
            return result;
        }
        ProjectConverter.decompressAll = decompressAll;
    })(ProjectConverter = Inknote.ProjectConverter || (Inknote.ProjectConverter = {}));
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var FileConverter;
    (function (FileConverter) {
        var splash = new Inknote.Drawing.LoadingSplash();
        function toDrawing(drawer) {
            var items = [];
            var projects = Inknote.Managers.ProjectManager.Instance.allProjects;
            var canvas = drawer.canvas;
            var maxFiles = Math.floor(canvas.width / 200);
            var column = 0;
            var row = 0;
            var anySelected = false;
            for (var i = 0; i < projects.length; i++) {
                var file = new Inknote.Drawing.File(projects[i].name);
                file.ID = projects[i].ID;
                if (projects[i].ID == Inknote.Managers.ProjectManager.Instance.hoverID) {
                    file.hover = true;
                }
                if (projects[i].ID == Inknote.Managers.ProjectManager.Instance.selectID) {
                    file.select = true;
                    anySelected = true;
                }
                file.x = column * 200 + 100;
                file.y = row * 200 + 100 - Inknote.ScrollService.Instance.y;
                items.push(file);
                column++;
                if (column >= maxFiles) {
                    column = 0;
                    row++;
                }
            }
            if (anySelected && Inknote.Managers.MachineManager.Instance.machineType != 0 /* Desktop */) {
                items.push(Inknote.Drawing.BottomMenu.Instance);
            }
            if (Inknote.Managers.ProjectManager.Instance.currentProject.pause) {
                items.push(splash);
            }
            return items;
        }
        FileConverter.toDrawing = toDrawing;
    })(FileConverter = Inknote.FileConverter || (Inknote.FileConverter = {}));
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    // returns a new note that is # semitones away from note. + is higher
    function getNoteOfDistance(note, semitones) {
        var tempNote = new Inknote.Model.Note(note.value, note.octave, note.length);
        if (Math.round(semitones) != semitones) {
            throw new Error("Number of semitones must be an integer");
        }
        tempNote.value = (note.value + semitones % 12);
        if (semitones > 0) {
            tempNote.octave = note.octave + Math.floor(semitones / 12);
        }
        if (semitones < 0) {
            tempNote.octave = note.octave + Math.ceil(semitones / 12);
        }
        return tempNote;
    }
    Inknote.getNoteOfDistance = getNoteOfDistance;
    function getThird(note) {
        return getNoteOfDistance(note, 4);
    }
    Inknote.getThird = getThird;
    function getMajorThird(note) {
        return getThird(note);
    }
    Inknote.getMajorThird = getMajorThird;
    function getMinorThird(note) {
        return getNoteOfDistance(note, 3);
    }
    Inknote.getMinorThird = getMinorThird;
    function getFlatFifth(note) {
        return getNoteOfDistance(note, 6);
    }
    Inknote.getFlatFifth = getFlatFifth;
    function getFifth(note) {
        return getNoteOfDistance(note, 7);
    }
    Inknote.getFifth = getFifth;
    function getSeventh(note) {
        return getNoteOfDistance(note, 10);
    }
    Inknote.getSeventh = getSeventh;
    function getMajorSeventh(note) {
        return getNoteOfDistance(note, 11);
    }
    Inknote.getMajorSeventh = getMajorSeventh;
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    // transposes specified note
    // note: transposes existing note.
    function transposeNote(note, semitones) {
        var tempNote = Inknote.getNoteOfDistance(note, semitones);
        note.value = tempNote.value;
        note.octave = tempNote.octave;
    }
    Inknote.transposeNote = transposeNote;
    // transposes specified chord
    // note: transposes existing chord.
    function transposeChord(chord, semitones) {
        for (var i = 0; i < chord.notes.length; i++) {
            transposeNote(chord.notes[i], semitones);
        }
    }
    Inknote.transposeChord = transposeChord;
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    function requiredRestSpace(rest, lineHeight) {
        var spaceNeeded = lineHeight;
        // padding;
        spaceNeeded += lineHeight;
        return spaceNeeded;
    }
    Inknote.requiredRestSpace = requiredRestSpace;
    function getDrawingItemFromRest(rest) {
        switch (rest.length) {
            case 0 /* Breve */:
                return new Inknote.Drawing.BreveRest();
                break;
            case 1 /* SemiBreve */:
                return new Inknote.Drawing.SemiBreveRest();
                break;
            case 2 /* Minim */:
                return new Inknote.Drawing.MinimRest();
                break;
            case 3 /* Crotchet */:
                return new Inknote.Drawing.CrotchetRest();
                break;
            case 4 /* Quaver */:
                return new Inknote.Drawing.QuaverRest();
                break;
            case 5 /* SemiQuaver */:
                return new Inknote.Drawing.SemiQuaverRest();
                break;
            case 6 /* DemiSemiQuaver */:
                return new Inknote.Drawing.DemiSemiQuaverRest();
                break;
            case 7 /* HemiDemiSemiQuaver */:
                return new Inknote.Drawing.HemiDemiSemiQuaverRest();
                break;
        }
    }
    Inknote.getDrawingItemFromRest = getDrawingItemFromRest;
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    function notesAreEqual(note1, note2) {
        return note1.value == note2.value && note1.octave == note2.octave && note1.length == note2.length;
    }
    Inknote.notesAreEqual = notesAreEqual;
    function notePitchesAreEqual(note1, note2) {
        return note1.value == note2.value && note1.octave == note2.octave;
    }
    Inknote.notePitchesAreEqual = notePitchesAreEqual;
    function requiredNoteSpace(note, lineHeight) {
        // width of head.
        var spaceNeeded = lineHeight;
        if (note.noteLength > 3 /* Crotchet */ && note.stemUp) {
            spaceNeeded += lineHeight;
        }
        //padding
        spaceNeeded += lineHeight;
        return spaceNeeded;
    }
    Inknote.requiredNoteSpace = requiredNoteSpace;
    // ID is set correctly. x and y currently not.
    // x and y to be set after getting?
    // todo: check if stem up or down.
    function getDrawingItemFromNote(note) {
        var tempDrawing = null;
        var stemUp = true;
        switch (note.length) {
            case 0 /* Breve */:
                tempDrawing = new Inknote.Drawing.Breve(stemUp);
                break;
            case 1 /* SemiBreve */:
                tempDrawing = new Inknote.Drawing.SemiBreve(stemUp);
                break;
            case 2 /* Minim */:
                tempDrawing = new Inknote.Drawing.Minim(stemUp);
                break;
            case 3 /* Crotchet */:
                tempDrawing = new Inknote.Drawing.Crotchet(stemUp);
                break;
            case 4 /* Quaver */:
                tempDrawing = new Inknote.Drawing.Quaver(stemUp);
                break;
            case 5 /* SemiQuaver */:
                tempDrawing = new Inknote.Drawing.SemiQuaver(stemUp);
                break;
            case 6 /* DemiSemiQuaver */:
                tempDrawing = new Inknote.Drawing.DemiSemiQuaver(stemUp);
                break;
            case 7 /* HemiDemiSemiQuaver */:
                tempDrawing = new Inknote.Drawing.HemiDemiSemiQuaver(stemUp);
                break;
            default:
                tempDrawing = new Inknote.Drawing.Crotchet(stemUp);
                break;
        }
        tempDrawing.ID = note.ID;
        return tempDrawing;
    }
    Inknote.getDrawingItemFromNote = getDrawingItemFromNote;
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    // note: actually only checks pitches, not note length.
    function noteIsInChord(note, chord) {
        for (var i = 0; i < chord.notes.length; i++) {
            if (Inknote.notePitchesAreEqual(note, chord.notes[i])) {
                return true;
            }
        }
        return false;
    }
    Inknote.noteIsInChord = noteIsInChord;
    function getMajorTriad(startNote) {
        var tempNotes = [
            startNote,
            Inknote.getMajorThird(startNote),
            Inknote.getFifth(startNote)
        ];
        return new Inknote.Model.Chord(tempNotes);
    }
    Inknote.getMajorTriad = getMajorTriad;
    function getMinorTriad(startNote) {
        var tempNotes = [
            startNote,
            Inknote.getMinorThird(startNote),
            Inknote.getFifth(startNote)
        ];
        return new Inknote.Model.Chord(tempNotes);
    }
    Inknote.getMinorTriad = getMinorTriad;
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    function getCurrentChordNotation(baseNote, rootNote, minor, annotations) {
        switch (Inknote.Managers.SettingsManager.Instance.getCurrentSetting().notationType) {
            case 0 /* Standard */:
                return new Inknote.ChordNotation.StandardChordNotation(baseNote, rootNote, minor, annotations);
                break;
            case 1 /* UPPER_lower */:
                return new Inknote.ChordNotation.UPPER_lowerChordNotation(baseNote, rootNote, minor, annotations);
                break;
            case 2 /* DoReMi */:
                return new Inknote.ChordNotation.DoReMiChordNotation(baseNote, rootNote, minor, annotations);
                break;
            default:
                return new Inknote.ChordNotation.StandardChordNotation(baseNote, rootNote, minor, annotations);
        }
    }
    Inknote.getCurrentChordNotation = getCurrentChordNotation;
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    function identifyChord(chord) {
        throw new Error("Not fully implemented");
        return Inknote.getCurrentChordNotation(chord.notes[0], chord.notes[0], true, "#5");
    }
    Inknote.identifyChord = identifyChord;
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var Testing;
    (function (Testing) {
        var _compressedProject = new Inknote.Compressed.CompressedProject("TestCompressed");
        var _compressedInstrument1 = new Inknote.Compressed.Instrument("Violin");
        var _compressedInstrument2 = new Inknote.Compressed.Instrument("Guitar");
        _compressedProject.instruments = [
            _compressedInstrument1,
            _compressedInstrument2
        ];
        Testing.$TEST$_compressedProject = _compressedProject;
    })(Testing = Inknote.Testing || (Inknote.Testing = {}));
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var Managers;
    (function (Managers) {
        (function (MachineType) {
            MachineType[MachineType["Desktop"] = 0] = "Desktop";
            MachineType[MachineType["Tablet"] = 1] = "Tablet";
            MachineType[MachineType["Mobile"] = 2] = "Mobile";
        })(Managers.MachineType || (Managers.MachineType = {}));
        var MachineType = Managers.MachineType;
        var MachineManager = (function () {
            function MachineManager() {
                var isMobile = false;
                if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4)))
                    isMobile = true;
                if (isMobile) {
                    this.machineType = 2 /* Mobile */;
                }
                else {
                    this.machineType = 0 /* Desktop */;
                }
            }
            Object.defineProperty(MachineManager, "Instance", {
                get: function () {
                    if (!MachineManager._instance) {
                        MachineManager._instance = new MachineManager();
                    }
                    return MachineManager._instance;
                },
                enumerable: true,
                configurable: true
            });
            return MachineManager;
        })();
        Managers.MachineManager = MachineManager;
    })(Managers = Inknote.Managers || (Inknote.Managers = {}));
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var Managers;
    (function (Managers) {
        (function (Page) {
            Page[Page["Score"] = 0] = "Score";
            Page[Page["Form"] = 1] = "Form";
            Page[Page["File"] = 2] = "File";
            Page[Page["List"] = 3] = "List";
        })(Managers.Page || (Managers.Page = {}));
        var Page = Managers.Page;
        var PageManager = (function () {
            function PageManager() {
                this.page = 0 /* Score */;
            }
            Object.defineProperty(PageManager, "Current", {
                get: function () {
                    if (!PageManager._current) {
                        PageManager._current = new PageManager();
                    }
                    return PageManager._current;
                },
                enumerable: true,
                configurable: true
            });
            return PageManager;
        })();
        Managers.PageManager = PageManager;
    })(Managers = Inknote.Managers || (Inknote.Managers = {}));
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var Managers;
    (function (Managers) {
        var SettingsManager = (function () {
            function SettingsManager() {
                this._settings = [];
                if (SettingsManager._instance) {
                    Inknote.log("Error: Instantiation failed. Use SettingsManager.Current() instead of new.");
                }
                SettingsManager._instance = this;
            }
            Object.defineProperty(SettingsManager, "Current", {
                get: function () {
                    return SettingsManager.Instance.getCurrentSetting();
                },
                enumerable: true,
                configurable: true
            });
            SettingsManager.prototype.getCurrentSetting = function () {
                var inst = SettingsManager.Instance;
                if (!inst._currentSetting) {
                    if (!inst._settings || inst._settings.length < 1) {
                        inst.addSetting(new Inknote.Setting("Default"));
                    }
                    inst.setCurrentSetting(inst.getSettings()[0]);
                }
                return inst._currentSetting;
            };
            SettingsManager.prototype.setCurrentSetting = function (setting) {
                this._currentSetting = setting;
            };
            SettingsManager.prototype.getSettings = function () {
                return this._settings;
            };
            SettingsManager.prototype.setSettings = function (settings) {
                this._settings = settings;
            };
            SettingsManager.prototype.addSettings = function (settings) {
                this._settings = this._settings.concat(settings);
            };
            SettingsManager.prototype.addSetting = function (setting) {
                this._settings = this._settings.concat(setting);
            };
            Object.defineProperty(SettingsManager, "Instance", {
                get: function () {
                    if (!this._instance) {
                        this._instance = new SettingsManager();
                    }
                    return SettingsManager._instance;
                },
                enumerable: true,
                configurable: true
            });
            return SettingsManager;
        })();
        Managers.SettingsManager = SettingsManager;
    })(Managers = Inknote.Managers || (Inknote.Managers = {}));
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var Managers;
    (function (Managers) {
        var ProjectManager = (function () {
            function ProjectManager() {
                this._projects = [];
            }
            ProjectManager.prototype.addProjects = function (items) {
                this._projects = this._projects.concat(items);
            };
            ProjectManager.prototype.addProject = function (item) {
                this._projects.push(item);
            };
            ProjectManager.prototype.setCurrentProject = function (ID) {
                this._currentProject = Inknote.getItemFromID(this._projects, ID);
            };
            Object.defineProperty(ProjectManager, "Instance", {
                get: function () {
                    if (!ProjectManager._instance) {
                        ProjectManager._instance = new ProjectManager();
                    }
                    return ProjectManager._instance;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ProjectManager.prototype, "currentProject", {
                get: function () {
                    if (!this._currentProject) {
                        this._currentProject = new Inknote.Project();
                    }
                    return this._currentProject;
                },
                enumerable: true,
                configurable: true
            });
            ProjectManager.prototype.save = function () {
                if (this._projects.indexOf(this._currentProject) == -1) {
                    this._projects.push(this._currentProject);
                }
                var compressed = Inknote.ProjectConverter.compressAll(this._projects);
                Inknote.Storage.saveProjects(compressed);
            };
            Object.defineProperty(ProjectManager.prototype, "allProjects", {
                get: function () {
                    return this._projects;
                },
                enumerable: true,
                configurable: true
            });
            ProjectManager.prototype.deleteSelectedProject = function () {
                var index = null;
                index = Inknote.getIndexFromID(this._projects, this.selectID);
                var proj = Inknote.getItemFromID(this._projects, this.selectID);
                var projName = proj.name;
                var self = this;
                Inknote.check("Are you sure you want to delete project \"" + projName + "\"", function () {
                    if (index != null) {
                        self._projects.splice(index, 1);
                    }
                    if (proj.ID == self._currentProject.ID) {
                        if (self._projects.length > 0) {
                            self._currentProject = Inknote.last(self._projects);
                        }
                        else {
                            self._currentProject = null;
                        }
                    }
                    setTimeout(function () {
                        self.currentProject.pause = false;
                    }, 100);
                }, function () {
                    Inknote.log("\"" + projName + "\" deletion cancelled");
                });
            };
            ProjectManager.prototype.openSelectedProject = function () {
                this.setCurrentProject(this.selectID);
                Managers.PageManager.Current.page = 0 /* Score */;
                Managers.ProjectManager.Instance._currentProject.pause = false;
                this.selectID = null;
            };
            ProjectManager.prototype.next = function () {
                var projects = this._projects;
                if (projects.length < 2) {
                    this.selectID = projects[0].ID;
                    return;
                }
                var index = Inknote.getIndexFromID(projects, this.selectID);
                if (index == projects.length - 1 || index == null) {
                    this.selectID = projects[0].ID;
                }
                else {
                    this.selectID = projects[index + 1].ID;
                }
            };
            ProjectManager.prototype.previous = function () {
                var projects = this._projects;
                if (projects.length < 2) {
                    this.selectID = projects[0].ID;
                    return;
                }
                var index = Inknote.getIndexFromID(projects, this.selectID);
                if (index == 0 || index == null) {
                    var lastProject = Inknote.last(projects);
                    this.selectID = lastProject.ID;
                }
                else {
                    this.selectID = projects[index - 1].ID;
                }
            };
            return ProjectManager;
        })();
        Managers.ProjectManager = ProjectManager;
    })(Managers = Inknote.Managers || (Inknote.Managers = {}));
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    (function (ActionType) {
        ActionType[ActionType["NewProject"] = 0] = "NewProject";
        ActionType[ActionType["OpenProject"] = 1] = "OpenProject";
        ActionType[ActionType["SaveProject"] = 2] = "SaveProject";
        ActionType[ActionType["ToPage"] = 3] = "ToPage";
    })(Inknote.ActionType || (Inknote.ActionType = {}));
    var ActionType = Inknote.ActionType;
    function Action(aType, page) {
        //Managers.ProjectManager
        Inknote.ScrollService.Instance.x = 0;
        Inknote.ScrollService.Instance.y = 0;
        Inknote.Managers.ProjectManager.Instance.currentProject.pause = true;
        Inknote.Managers.ProjectManager.Instance.selectID = "";
        switch (aType) {
            case 0 /* NewProject */:
                newProject();
                break;
            case 1 /* OpenProject */:
                openProject();
                break;
            case 2 /* SaveProject */:
                saveProject();
                break;
            case 3 /* ToPage */:
                if (!page) {
                    page = 0 /* Score */;
                }
                moveToPage(page);
                break;
            default:
                Inknote.log("Unknown action type", 0 /* Error */);
        }
        // project manager needs to be static.
        setTimeout(function () {
            Inknote.Managers.ProjectManager.Instance.currentProject.pause = false;
        }, 100);
    }
    Inknote.Action = Action;
    function newProject() {
        var newProj = new Inknote.Project("Untitled");
        Inknote.Managers.ProjectManager.Instance.addProject(newProj);
        Inknote.Managers.ProjectManager.Instance.setCurrentProject(newProj.ID);
        Inknote.Managers.PageManager.Current.page = 0 /* Score */;
        Inknote.Managers.ProjectManager.Instance.currentProject.pause = true;
    }
    function openProject() {
        Inknote.Managers.PageManager.Current.page = 2 /* File */;
    }
    function saveProject() {
        Inknote.Managers.ProjectManager.Instance.save();
    }
    function moveToPage(page) {
        Inknote.Managers.PageManager.Current.page = page;
    }
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var CanvasControl = (function () {
        function CanvasControl(drawService) {
            this.drawService = drawService;
            var self = this;
            this.drawService.canvas.onmouseover = function (e) {
                self.drawService.canvas.onmousemove = function (me) {
                    self.hover(me);
                };
            };
            this.drawService.canvas.onmouseout = function (e) {
                self.drawService.canvas.onmousemove = null;
            };
            this.drawService.canvas.onclick = function (e) {
                self.click(e);
            };
            this.drawService.canvas.ondblclick = function (e) {
                self.dblClick(e);
            };
            // right click
            this.drawService.canvas.oncontextmenu = function (e) {
                self.rightClick(e);
            };
        }
        CanvasControl.prototype.hover = function (e) {
            var allItems = this.drawService.items;
            var hovered = false;
            for (var i = 0; i < allItems.length; i++) {
                if (Inknote.mouseIsOver(allItems[i], e, this.drawService.canvas)) {
                    // log(allItems[i].y + ":" + e.clientY + ":" + ScrollService.Instance.y);
                    var hoverID = allItems[i].ID;
                    Inknote.Managers.ProjectManager.Instance.hoverID = hoverID;
                    hovered = true;
                    this.drawService.canvas.style.cursor = "pointer";
                }
            }
            if (!hovered) {
                Inknote.Managers.ProjectManager.Instance.hoverID = null;
                this.drawService.canvas.style.cursor = "";
            }
        };
        CanvasControl.prototype.click = function (e) {
            var allItems = this.drawService.items;
            var selected = false;
            for (var i = 0; i < allItems.length; i++) {
                if (Inknote.mouseIsOver(allItems[i], e, this.drawService.canvas)) {
                    var selectedID = allItems[i].ID;
                    // if keyboard clicked, do keyboard action.
                    if (selectedID == Inknote.Drawing.Keyboard.Instance.ID) {
                        Inknote.Drawing.Keyboard.Instance.click(e);
                        return;
                    }
                    // " " bottom menu
                    if (selectedID == Inknote.Drawing.BottomMenu.Instance.ID) {
                        Inknote.Drawing.BottomMenu.Instance.click(e);
                        return;
                    }
                    // scroll bar
                    if (selectedID == Inknote.ScrollService.ScrollBar.ID) {
                        Inknote.ScrollService.ScrollBar.click(e);
                        return;
                    }
                    // scroll thumbnail
                    if (selectedID == Inknote.ScrollService.ScrollBar.scrollThumbnail.ID) {
                        Inknote.ScrollService.ScrollBar.scrollThumbnail.click(e);
                        return;
                    }
                    Inknote.Managers.ProjectManager.Instance.selectID = selectedID;
                    selected = true;
                }
            }
            if (!selected) {
                // clear
                Inknote.ScrollService.ScrollBar.scrollThumbnail.visible = false;
                Inknote.Managers.ProjectManager.Instance.selectID = null;
                Inknote.RightClickMenuService.Instance.visible = false;
            }
        };
        CanvasControl.prototype.dblClick = function (e) {
            if (Inknote.Managers.PageManager.Current.page == 2 /* File */) {
                if (Inknote.Managers.ProjectManager.Instance.selectID) {
                    Inknote.Managers.ProjectManager.Instance.openSelectedProject();
                }
            }
        };
        CanvasControl.prototype.rightClick = function (e) {
            Inknote.RightClickMenuService.Instance.openMenu(e.clientX, e.clientY - 50, this.drawService.canvas);
            e.preventDefault();
        };
        return CanvasControl;
    })();
    Inknote.CanvasControl = CanvasControl;
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    function canScroll(up) {
        if (up && Inknote.ScrollService.Instance.y - Inknote.ScrollService.Instance.scrollSpeed < 0) {
            Inknote.ScrollService.Instance.y = 0;
            return false;
        }
        else if (up) {
            return true;
        }
        switch (Inknote.Managers.PageManager.Current.page) {
            case 2 /* File */:
                var projects = Inknote.Managers.ProjectManager.Instance.allProjects.length;
                var canvas = { x: window.innerWidth, y: window.innerHeight - 100 };
                var maxRowNo = Math.floor(canvas.x / 200);
                var maxHeight = Math.ceil(projects / maxRowNo) * 200 + 100;
                return maxHeight > Inknote.ScrollService.Instance.y + Inknote.ScrollService.Instance.scrollSpeed + canvas.y;
                break;
            case 0 /* Score */:
                return false;
                break;
            default:
                return false;
        }
    }
    Inknote.canScroll = canScroll;
    window.onmousewheel = function (ev) {
        var isUp = false;
        if (ev.wheelDelta > 0) {
            isUp = true;
        }
        if (isUp) {
            Inknote.ScrollService.Instance.up();
        }
        else {
            Inknote.ScrollService.Instance.down();
        }
    };
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    document.onkeydown = function (e) {
        if (e.keyCode == 8) {
            e.preventDefault();
        }
    };
    window.onkeyup = function (ev) {
        switch (Inknote.Managers.PageManager.Current.page) {
            case 2 /* File */:
                fileType(ev);
                break;
            case 0 /* Score */:
                scoreType(ev);
                break;
            default:
                break;
        }
    };
    function scoreType(e) {
        var inst = Inknote.Managers.ProjectManager.Instance;
        var proj = inst.currentProject;
        // name is selected
        if (inst.selectID == proj.ID) {
            if (e.keyCode == 13) {
                // enter
                inst.selectID = null;
            }
            else if (Inknote.countWhere([16, 17, 18, 20], function (item) {
                return item == e.keyCode;
            }) > 0) {
            }
            else if (e.keyCode == 8) {
                // backspace
                proj.name = proj.name.substr(0, proj.name.length - 1);
            }
            else if (e.keyCode == 46) {
                // delete
                proj.name = "";
            }
            else {
                proj.name = Inknote.pascalCase(proj.name + String.fromCharCode(e.keyCode));
            }
        }
        e.preventDefault();
    }
    function fileType(e) {
        var inst = Inknote.Managers.ProjectManager.Instance;
        var proj = inst.currentProject;
        if (e.keyCode == 13) {
            // enter
            inst.openSelectedProject();
        }
        else if (e.keyCode == 38) {
            // up
            Inknote.ScrollService.Instance.up();
        }
        else if (e.keyCode == 40) {
            // down
            Inknote.ScrollService.Instance.down();
        }
        else if (e.keyCode == 37) {
            // left
            inst.previous();
        }
        else if (e.keyCode == 39) {
            // right
            inst.next();
        }
        else if (e.keyCode == 46) {
            // delete
            inst.deleteSelectedProject();
        }
    }
})(Inknote || (Inknote = {}));
var Inknote;
(function (Inknote) {
    var Main;
    (function (Main) {
        // load setting manager
        var settingsManager = Inknote.Managers.SettingsManager.Instance;
        var appSetting = new Inknote.Setting("Default");
        // ***********************************************
        // ** comment out the following line when live. **
        appSetting.testMode = true;
        // ***********************************************
        // ***********************************************
        // *** uncomment the following to test mobile  ***
        Inknote.Managers.MachineManager.Instance.machineType = 2 /* Mobile */;
        // ***********************************************
        settingsManager.addSetting(appSetting);
        settingsManager.addSettings(Inknote.Storage.getSettings());
        // load drawing settings
        var drawing = Inknote.DrawingSettings.Instance;
        // load project manager
        var projectManager = Inknote.Managers.ProjectManager.Instance;
        var decompressedProjects = Inknote.ProjectConverter.decompressAll(Inknote.Storage.getProjects());
        projectManager.addProjects(decompressedProjects);
        var x = new Inknote.DrawService("my-canvas");
        var y = new Inknote.CanvasControl(x);
    })(Main = Inknote.Main || (Inknote.Main = {}));
})(Inknote || (Inknote = {}));
// every added file must be added here.
// care must be taken to ensure there are no dependency loops.
// rights
/// <reference path="scripts/rights.ts" />
// interfaces
/// <reference path="scripts/interfaces/idrawable.ts" />
/// <reference path="scripts/interfaces/iidentifiable.ts" />
/// <reference path="scripts/interfaces/inameable.ts" />
/// <reference path="scripts/interfaces/ichordable.ts" />
// helpers
/// <reference path="scripts/helpers/array.ts" />
/// <reference path="scripts/helpers/string.ts" />
/// <reference path="scripts/helpers/canvas.ts" />
/// <reference path="scripts/helpers/maths.ts" />
// model
/// <reference path="scripts/model/settings.ts" />
/// <reference path="scripts/model/drawoptions.ts" />
/// <reference path="scripts/model/timesignature.ts" />
/// <reference path="scripts/model/notation.ts" />
/// <reference path="scripts/model/notevalue.ts" />
/// <reference path="scripts/model/notelength.ts" />
/// <reference path="scripts/model/rest.ts" />
/// <reference path="scripts/model/note.ts" />
/// <reference path="scripts/model/chord.ts" />
/// <reference path="scripts/model/bar.ts" />
/// <reference path="scripts/model/instrument.ts" />
/// <reference path="scripts/model/project.ts" />
/// <reference path="scripts/model/drawingsettings.ts" />
// compressed
/// <reference path="scripts/model/compressed/compressednote.ts" />
/// <reference path="scripts/model/compressed/compressedchord.ts" />
/// <reference path="scripts/model/compressed/compressedBar.ts" />
/// <reference path="scripts/model/compressed/compressedInstrument.ts" />
/// <reference path="scripts/model/compressed/compressedproject.ts" />
// keys
/// <reference path="scripts/model/key/key.ts" />
/// <reference path="scripts/model/key/keytypes.ts" />
/// <reference path="scripts/model/key/keydefinitions.ts" />
/// <reference path="scripts/model/key/keyextensions.ts" />
// chord notation
/// <reference path="scripts/model/chordnotation/notationtype.ts" />
/// <reference path="scripts/model/chordnotation/doremichordnotation.ts" />
/// <reference path="scripts/model/chordnotation/standardchordnotation.ts" />
/// <reference path="scripts/model/chordnotation/upper_lowerchordnotation.ts" />
// drawings
/// <reference path="scripts/drawings/licence.ts" />
/// <reference path="scripts/drawings/fonts.ts" />
/// <reference path="scripts/drawings/colours.ts" />
/// <reference path="scripts/drawings/background.ts" />
/// <reference path="scripts/drawings/stave.ts" />
/// <reference path="scripts/drawings/sharp.ts" />
/// <reference path="scripts/drawings/flat.ts" />
/// <reference path="scripts/drawings/note.ts" />
/// <reference path="scripts/drawings/rest.ts" />
/// <reference path="scripts/drawings/loading.ts" /> 
/// <reference path="scripts/drawings/name.ts" />
/// <reference path="scripts/drawings/file.ts" />
/// <reference path="scripts/drawings/keyboardkey.ts" />
/// <reference path="scripts/drawings/keyboard.ts" />
/// <reference path="scripts/drawings/bottommenubutton.ts" />
/// <reference path="scripts/drawings/bottommenu.ts" />
/// <reference path="scripts/drawings/scoremenu.ts" />
/// <reference path="scripts/drawings/chordsymbol.ts" />
/// <reference path="scripts/drawings/scrollbars/scrollbar.ts" />
/// <reference path="scripts/drawings/scrollbars/filescrollbar.ts" />
/// <reference path="scripts/drawings/scrollbars/scrollthumbnail.ts" />
/// <reference path="scripts/drawings/scrollbars/projectscrollbar.ts" />
/// <reference path="scripts/drawings/rightclickmenus/rightclickmenu.ts" />
// storage
/// <reference path="scripts/storage/localstorage.ts" />
// services
/// <reference path="scripts/services/confirmservice.ts" />
/// <reference path="scripts/services/logger.ts" />
/// <reference path="scripts/services/identifyservice.ts" />
/// <reference path="scripts/services/scrollservice.ts" />
/// <reference path="scripts/services/licenceservice.ts" />
/// <reference path="scripts/services/idrawableservice.ts" />
/// <reference path="scripts/services/rightclickmenuservice.ts" /> 
/// <reference path="scripts/services/drawservice.ts" />
/// <reference path="scripts/services/scoringservice.ts" />
/// <reference path="scripts/services/projectconverter.ts" />
/// <reference path="scripts/services/fileconverter.ts" />
/// <reference path="scripts/services/intervalservice.ts" />
/// <reference path="scripts/services/transposeservice.ts" />
/// <reference path="scripts/services/restservice.ts" />
/// <reference path="scripts/services/noteservice.ts" />
/// <reference path="scripts/services/chordservice.ts" />
/// <reference path="scripts/services/chordnotationservice.ts" />
/// <reference path="scripts/services/chordidentifier.ts" />
// testData
/// <reference path="scripts/testdata/compressedproject.ts" />
// managers
/// <reference path="scripts/managers/machinemanager.ts" />
/// <reference path="scripts/managers/pagemanager.ts" />
/// <reference path="scripts/managers/settingsmanager.ts" />
/// <reference path="scripts/managers/projectmanager.ts" />
// controls
/// <reference path="scripts/actions/baseAction.ts" />
/// <reference path="scripts/actions/canvascontrol.ts" />
/// <reference path="scripts/actions/scrollcontrol.ts" />
/// <reference path="scripts/actions/typecontrol.ts" />
// app
/// <reference path="scripts/app.ts" />
//# sourceMappingURL=@script.js.map