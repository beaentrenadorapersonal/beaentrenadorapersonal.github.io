{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
    nix-filter.url = "github:numtide/nix-filter";
  };

  outputs = { self, nixpkgs, flake-utils, nix-filter }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs {
          inherit system;
        };

        nix-src = nix-filter.lib.filter {
          root = ./.;
          include = with nix-filter.lib;[
            isDirectory
            (matchExt "nix")
          ];
        };

      in
      {
        checks = flake-utils.lib.flattenTree {

          nixpkgs-fmt = pkgs.runCommand "check-nixpkgs-fmt"
            {
              buildInputs = with pkgs; [
                nixpkgs-fmt
              ];
            }
            ''
              nixpkgs-fmt --check ${nix-src}
              mkdir $out
            '';

        };

        devShells = flake-utils.lib.flattenTree {
          default = pkgs.mkShell {
            buildInputs = with pkgs; [
              nixpkgs-fmt
              nodejs-18_x
              nodePackages.npm
              nodePackages.prettier
            ];
          };
        };

      }
    );
}
