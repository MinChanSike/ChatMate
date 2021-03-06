chatmate.utils.UUIDGen = {

    generate : function () {
        "use strict";

        // http://www.ietf.org/rfc/rfc4122.txt
        var s = [],
            hexDigits = "0123456789abcdef",
            i;

        for (i = 0; i < 36; i += 1) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }

        // Bits 12-15 of the time_hi_and_version field to 0010.
        s[14] = "4";

        // Bits 6-7 of the clock_seq_hi_and_reserved to 01.
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
        s[8] = s[13] = s[18] = s[23] = "-";

        return s.join("");
    }
};