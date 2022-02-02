import { ColorNeutralPalette } from "styles/Colors";
import { PaddingEnum } from "styles/Spacer";
import { TableProps } from "./Table.type";

const TableBasic = (props: TableProps) => {
  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr>
          {props.columns.map((data) => {
            return (
              <th
                key={data.key}
                style={{
                  textAlign: "left",
                  padding: `${PaddingEnum["2.5x"]} ${PaddingEnum["0x"]} ${PaddingEnum["2.5x"]} ${PaddingEnum["1x"]}`,
                  backgroundColor: ColorNeutralPalette.gray4,
                }}
              >
                {data.title}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {props.dataSource.map((data: any, index: any) => {
          return (
            <tr key={data.key || index}>
              {Object.keys(data).map((subdata, subindex) => {
                return (
                  <td
                    style={{
                      textAlign: "left",
                      padding: `${PaddingEnum["0.5x"]} ${PaddingEnum["0x"]} ${PaddingEnum["0.5x"]} ${PaddingEnum["1x"]}`,
                    }}
                    key={subindex}
                  >
                    {data[subdata]}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
      {props.footer && (
        <tfoot>
          <tr>
            <td>Footer</td>
          </tr>
        </tfoot>
      )}
    </table>
  );
};

TableBasic.defaultProps = {
  footer: false,
};

export default TableBasic;
