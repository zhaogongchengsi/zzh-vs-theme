import { getColors, ColorName, getThemeColors } from "./colors";

export function generateTokenColors(base: "vs" | "vs-dark") {
  const basecolors = getColors(base);
  const getColor = (key: ColorName, op: string = "") => {
    return basecolors[key] + op;
  };

  const getBaseColor = (name: ColorName) => getThemeColors()[name];

  const foreground = getColor("foreground");
  const secondaryForeground = getColor("secondaryForeground");
  const primary = getColor("primary");

  return [
    {
      scope: ["comment", "punctuation.definition.comment", "string.comment"],
      settings: {
        foreground: getColor("comment"),
      },
    },
    {
      scope: [
        "delimiter.bracket",
        "delimiter",
        "invalid.illegal.character-not-allowed-here.html",
        "keyword.operator.rest",
        "keyword.operator.spread",
        "keyword.operator.type.annotation",
        "keyword.operator.relational.ts",
        "meta.brace",
        "meta.tag.block.any.html",
        "meta.tag.inline.any.html",
        "meta.tag.structure.input.void.html",
        "meta.type.annotation",
        "storage.type.function.arrow",
        "keyword.operator.type",
        "meta.objectliteral.ts",
        "punctuation",
      ],
      settings: {
        foreground: getColor("punctuation"),
      },
    },
    {
      scope: [
        "constant",
        "entity.name.constant",
        "variable.language",
        "meta.definition.variable",
      ],
      settings: {
        foreground: getColor("constant"),
      },
    },
    {
      scope: ["entity", "entity.name"],
      settings: {
        foreground: getColor("function"),
      },
    },
    {
      scope: "variable.parameter.function",
      settings: {
        foreground,
      },
    },
    {
      scope: ["entity.name.tag", "tag.html"],
      settings: {
        foreground: getColor("keyword"),
      },
    },
    {
      scope: "entity.name.function",
      settings: {
        foreground: getColor("function"),
      },
    },
    {
      scope: ["keyword", "storage.type.class.jsdoc"],
      settings: {
        foreground: getColor("keyword"),
      },
    },
    {
      scope: [
        "storage",
        "storage.type",
        "support.type.builtin",
        "constant.language.undefined",
        "constant.language.null",
      ],
      settings: {
        foreground: getColor("builtin"),
      },
    },
    {
      scope: [
        "storage.modifier.package",
        "storage.modifier.import",
        "storage.type.java",
      ],
      settings: {
        foreground,
      },
    },
    {
      scope: [
        "string",
        "string punctuation.section.embedded source",
        "attribute.value",
      ],
      settings: {
        foreground: getColor("string"),
      },
    },
    {
      scope: [
        "punctuation.definition.string",
        "punctuation.support.type.property-name",
      ],
      settings: {
        foreground: getColor("string", "99"),
      },
    },
    {
      scope: "support",
      settings: {
        foreground: getColor("property"),
      },
    },
    {
      scope: [
        "property",
        "meta.property-name",
        "meta.object-literal.key",
        "entity.name.tag.yaml",
        "attribute.name",
      ],
      settings: {
        foreground: getColor("property"),
      },
    },
    {
      scope: ["async"],
      settings: {
        foreground: getColor("async"),
      },
    },
    {
      scope: [
        "entity.other.attribute-name",
        "invalid.deprecated.entity.other.attribute-name.html",
      ],
      settings: {
        foreground: getColor("variable"),
      },
    },
    {
      scope: ["variable", "identifier"],
      settings: {
        foreground: getColor("variable"),
      },
    },
    {
      scope: ["support.type.primitive", "entity.name.type"],
      settings: {
        foreground: getColor("type"),
      },
    },
    {
      scope: "namespace",
      settings: {
        foreground: getColor("namespace"),
      },
    },
    {
      scope: ["keyword.operator", "meta.var.expr.ts"],
      settings: {
        foreground: getColor("operator"),
      },
    },

    {
      scope: "string variable",
      settings: {
        foreground: getColor("string"),
      },
    },
    {
      scope: ["source.regexp", "string.regexp"],
      settings: {
        foreground: getColor("regex"),
      },
    },
    {
      scope: [
        "string.regexp.character-class",
        "string.regexp constant.character.escape",
        "string.regexp source.ruby.embedded",
        "string.regexp string.regexp.arbitrary-repitition",
      ],
      settings: {
        foreground: getColor("string"),
      },
    },
    {
      scope: "string.regexp constant.character.escape",
      settings: {
        foreground: getColor("yellow"),
      },
    },
    {
      scope: ["support.constant"],
      settings: {
        foreground: getColor("constant"),
      },
    },
    {
      scope: ["constant.numeric", "number"],
      settings: {
        foreground: getColor("number"),
      },
    },
    {
      scope: ["keyword.other.unit"],
      settings: {
        foreground: getColor("builtin"),
      },
    },
    {
      scope: ["constant.language.boolean", "constant.language"],
      settings: {
        foreground: getColor("boolean"),
      },
    },
    {
      scope: "meta.module-reference",
      settings: {
        foreground: primary,
      },
    },
    {
      scope: "punctuation.definition.list.begin.markdown",
      settings: {
        foreground: getColor("orange"),
      },
    },
    {
      scope: ["markup.heading", "markup.heading entity.name"],
      settings: {
        fontStyle: "bold",
        foreground: primary,
      },
    },
    {
      scope: "markup.quote",
      settings: {
        foreground: getColor("interface"),
      },
    },
    {
      scope: "markup.italic",
      settings: {
        fontStyle: "italic",
        foreground,
      },
    },
    {
      scope: "markup.bold",
      settings: {
        fontStyle: "bold",
        foreground,
      },
    },
    {
      scope: "markup.raw",
      settings: {
        foreground: primary,
      },
    },
    {
      scope: [
        "constant.other.reference.link",
        "string.other.link",
        "punctuation.definition.string.begin.markdown",
        "punctuation.definition.string.end.markdown",
      ],
      settings: {
        foreground: getColor("string"),
      },
    },
    {
      scope: ["markup.underline.link.markdown"],
      settings: {
        foreground: secondaryForeground,
        fontStyle: "underline",
      },
    },
    {
      scope: ["type.identifier"],
      settings: {
        foreground: getColor("class"),
      },
    },
    {
      scope: ["entity.other.attribute-name.html.vue"],
      settings: {
        foreground: getColor("function"),
      },
    },
    {
      scope: ["invalid.illegal.unrecognized-tag.html"],
      settings: {
        fontStyle: "normal",
      },
    },

    {
      scope: [
        "markup.deleted",
        "meta.diff.header.from-file",
        "punctuation.definition.deleted",
      ],
      settings: {
        background: getBaseColor("red")[0],
        foreground: getBaseColor("red")[7],
      },
    },
    {
      scope: [
        "markup.inserted",
        "meta.diff.header.to-file",
        "punctuation.definition.inserted",
      ],
      settings: {
        background: getBaseColor("green")[0],
        foreground: getBaseColor("green")[6],
      },
    },
    {
      scope: ["markup.changed", "punctuation.definition.changed"],
      settings: {
        background: getBaseColor("orange")[1],
        foreground: getBaseColor("orange")[6],
      },
    },
    {
      scope: ["markup.ignored", "markup.untracked"],
      settings: {
        foreground: getBaseColor("gray")[1],
        background: getBaseColor("blue")[6],
      },
    },
    {
      scope: "meta.diff.range",
      settings: {
        foreground:
          base === "vs" ? getBaseColor("purple")[5] : getBaseColor("purple")[6],
        fontStyle: "bold",
      },
    },
    {
      scope: "meta.diff.header",
      settings: {
        foreground: getBaseColor("blue")[6],
      },
    },
    {
      scope: "meta.separator",
      settings: {
        fontStyle: "bold",
        foreground: getBaseColor("blue")[6],
      },
    },
    {
      scope: "meta.output",
      settings: {
        foreground: getBaseColor("blue")[6],
      },
    },
    {
      scope: [
        "brackethighlighter.tag",
        "brackethighlighter.curly",
        "brackethighlighter.round",
        "brackethighlighter.square",
        "brackethighlighter.angle",
        "brackethighlighter.quote",
      ],
      settings: {
        foreground: getBaseColor("gray")[6],
      },
    },
    {
      scope: "brackethighlighter.unmatched",
      settings: {
        foreground: getBaseColor("red")[7],
      },
    },
  ];
}
