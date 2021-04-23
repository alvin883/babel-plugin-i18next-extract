import { Config } from "../config";

type TPHPExporterParams = {
  config: Config;
  file: {
    content: {
      [k: string]: string;
    };
  };
};

type TPHPExporter = {
  stringify: (params: TPHPExporterParams) => string;
};

const phpExporter: TPHPExporter = {
  stringify: ({ config, file }) => {
    let fileContent = `<?php\nreturn [\n`;
    Object.keys(file.content).forEach((key, index) => {
      fileContent += `'${key}' => __( '${key}', '${config.__themedomain}' ),\n`;
    });
    fileContent += `];`;
    return fileContent;
  },
};

export default phpExporter;
