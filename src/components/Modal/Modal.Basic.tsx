import { Button } from "components/Button";
import { ColorNeutralPalette } from "styles/Colors";
import {
  BorderRadiusEnum,
  MarginEnum,
  PaddingEnum,
  SizeEnum,
} from "styles/Spacer";
import { ModalBasicProps } from "./Modal.type";
import "./styles/ModalBasic.css";

const ModalBasic = (props: ModalBasicProps) => {
  return props.visible ? (
    <div className="container-modal">
      <div
        style={{
          margin: "100px auto auto  auto",
          width: props.widthModal ?? 472,
          backgroundColor:
            props.backgroundColor ?? `${ColorNeutralPalette.gray1}`,
          borderRadius: BorderRadiusEnum["1x"],
        }}
      >
        {props.header && (
          <section
            style={{
              padding: `${PaddingEnum["3x"]} ${PaddingEnum["5x"]}`,
              borderBottom: `1px solid ${ColorNeutralPalette.gray6}`,
            }}
          >
            <div
              style={{
                justifyContent: "space-between",
                display: "flex",
                alignItems: "center",
              }}
            >
              <strong style={{ color: ColorNeutralPalette.gray8 }}>
                {props.headerTitle}
              </strong>
              <span
                onClick={props.onCancel}
                style={{ fontSize: SizeEnum["6x"], cursor: "pointer" }}
              >
                &times;
              </span>
            </div>
          </section>
        )}
        <section style={{ padding: PaddingEnum["5x"] }}>
          {props.children}
        </section>
        {props.footer && (
          <section
            style={{
              padding: `${PaddingEnum["2.5x"]} ${PaddingEnum["5x"]}`,
              justifyContent: "flex-end",
              display: "flex",
              borderTop: `1px solid ${ColorNeutralPalette.gray6}`,
            }}
          >
            <Button.Normal
              onClick={props.onCancel}
              variant="secondary"
              label="Cancel"
            />
            <Button.Normal
              onClick={props.onOk}
              marginLeft={MarginEnum["1x"]}
              label="OK"
            />
          </section>
        )}
      </div>
    </div>
  ) : null;
};

ModalBasic.defaultProps = {
  header: true,
  footer: true,
};

export default ModalBasic;
